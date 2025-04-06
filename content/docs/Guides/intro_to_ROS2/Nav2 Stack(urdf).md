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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHKNLWN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjoy%2BaHCe8TYsYH%2FFmz1qqze4L%2B1NdF6i9%2BTZ6Gkr6gIgBB69wESayQ5%2FaiwdFgXfkFopbIKQL52rfdPnDqfSV5cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIFzynwUteBz0nkw%2FCrcAxj2vlGItY2UmBhewLBe6y0IEgGhawGvLzCn5lQmnaELbaqSDqWoRL1rrt3GoeY9%2BBa4mUob5Bky01QcbxQda7XQtSoM7Bli5ybnzr3PZ87MwlMgtPBy4s8tUowxZYatzBe1Fm7N2owAcmWAPZx%2FFWjfzmSkeq%2BOh7kJHjF0qcUK2htYm11Yz0xJR%2FZrnf3mG20hILkR8dswrFFoTb9d6vmyRyJE8o9x7hyKWXryL5Q4JatIcsr0plwtXkzzmSktgizH36VEhFtHuHYf1%2Bkam%2FqBTsdCjO5CRPY3wnOtpOUkvruBmeNT%2BqmBO2CElkxprqGk%2BT%2BWubI9oyjNmm34OObjYBrPtbdsR8x9KF2Cadfj3HBads9%2Ffch7JQCTKAIOprREKceXedzXInRoKqXknFeuotJ4%2FM6SvibUhne2QqsLpa%2FF7QlLT1MtjtCuQ3z0JDEpsbcluKD4sV8%2BskGd19wWehp%2FRM%2BLStIYCzEnkb1F4oFgsTQ%2Fow%2FWWe5S8rqSy4PZbx1Kg3TKCJp8C3QGq732AMVJf8rBYviQWc%2BSxoAjbXTLx0IVY8SYvra%2Fa5bUKHz7uH81a4U0p0X%2F5oRRJctsEhOGu9RE5y2LdIEedoKNvZUSeNp7ojvTQze0MPX0y78GOqUBU0thMnBR5t6RfxW%2F1shdhNRxYJc%2FzReq2yPU37BTAFHP4%2BmKneqZSHGjPdy%2BRtQQpiZ%2BVdsKAk15yx9pNTCISdrXSVWecSFz1eOs4PaYoy2Z1tP2Y4ke1mKqwE%2FHrklMybRjt%2BxiKgC9GT4dKGMRUkyRXqsMGWPi%2BSu27KDPIOtXIJsP7j8brva4R69ly0Mc5tjvDYsDInrNR%2F7HKGYgVfsGH5%2Fs&X-Amz-Signature=83c8d9ca12379b62fcdd35b4191b1cdff2ea00c9438ac6a3b795a18308026f4c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHKNLWN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjoy%2BaHCe8TYsYH%2FFmz1qqze4L%2B1NdF6i9%2BTZ6Gkr6gIgBB69wESayQ5%2FaiwdFgXfkFopbIKQL52rfdPnDqfSV5cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIFzynwUteBz0nkw%2FCrcAxj2vlGItY2UmBhewLBe6y0IEgGhawGvLzCn5lQmnaELbaqSDqWoRL1rrt3GoeY9%2BBa4mUob5Bky01QcbxQda7XQtSoM7Bli5ybnzr3PZ87MwlMgtPBy4s8tUowxZYatzBe1Fm7N2owAcmWAPZx%2FFWjfzmSkeq%2BOh7kJHjF0qcUK2htYm11Yz0xJR%2FZrnf3mG20hILkR8dswrFFoTb9d6vmyRyJE8o9x7hyKWXryL5Q4JatIcsr0plwtXkzzmSktgizH36VEhFtHuHYf1%2Bkam%2FqBTsdCjO5CRPY3wnOtpOUkvruBmeNT%2BqmBO2CElkxprqGk%2BT%2BWubI9oyjNmm34OObjYBrPtbdsR8x9KF2Cadfj3HBads9%2Ffch7JQCTKAIOprREKceXedzXInRoKqXknFeuotJ4%2FM6SvibUhne2QqsLpa%2FF7QlLT1MtjtCuQ3z0JDEpsbcluKD4sV8%2BskGd19wWehp%2FRM%2BLStIYCzEnkb1F4oFgsTQ%2Fow%2FWWe5S8rqSy4PZbx1Kg3TKCJp8C3QGq732AMVJf8rBYviQWc%2BSxoAjbXTLx0IVY8SYvra%2Fa5bUKHz7uH81a4U0p0X%2F5oRRJctsEhOGu9RE5y2LdIEedoKNvZUSeNp7ojvTQze0MPX0y78GOqUBU0thMnBR5t6RfxW%2F1shdhNRxYJc%2FzReq2yPU37BTAFHP4%2BmKneqZSHGjPdy%2BRtQQpiZ%2BVdsKAk15yx9pNTCISdrXSVWecSFz1eOs4PaYoy2Z1tP2Y4ke1mKqwE%2FHrklMybRjt%2BxiKgC9GT4dKGMRUkyRXqsMGWPi%2BSu27KDPIOtXIJsP7j8brva4R69ly0Mc5tjvDYsDInrNR%2F7HKGYgVfsGH5%2Fs&X-Amz-Signature=922d0cbd028026977fe4cab49381498dde29beb5ee77abd9a64f53fd0c73bb15&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHKNLWN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjoy%2BaHCe8TYsYH%2FFmz1qqze4L%2B1NdF6i9%2BTZ6Gkr6gIgBB69wESayQ5%2FaiwdFgXfkFopbIKQL52rfdPnDqfSV5cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIFzynwUteBz0nkw%2FCrcAxj2vlGItY2UmBhewLBe6y0IEgGhawGvLzCn5lQmnaELbaqSDqWoRL1rrt3GoeY9%2BBa4mUob5Bky01QcbxQda7XQtSoM7Bli5ybnzr3PZ87MwlMgtPBy4s8tUowxZYatzBe1Fm7N2owAcmWAPZx%2FFWjfzmSkeq%2BOh7kJHjF0qcUK2htYm11Yz0xJR%2FZrnf3mG20hILkR8dswrFFoTb9d6vmyRyJE8o9x7hyKWXryL5Q4JatIcsr0plwtXkzzmSktgizH36VEhFtHuHYf1%2Bkam%2FqBTsdCjO5CRPY3wnOtpOUkvruBmeNT%2BqmBO2CElkxprqGk%2BT%2BWubI9oyjNmm34OObjYBrPtbdsR8x9KF2Cadfj3HBads9%2Ffch7JQCTKAIOprREKceXedzXInRoKqXknFeuotJ4%2FM6SvibUhne2QqsLpa%2FF7QlLT1MtjtCuQ3z0JDEpsbcluKD4sV8%2BskGd19wWehp%2FRM%2BLStIYCzEnkb1F4oFgsTQ%2Fow%2FWWe5S8rqSy4PZbx1Kg3TKCJp8C3QGq732AMVJf8rBYviQWc%2BSxoAjbXTLx0IVY8SYvra%2Fa5bUKHz7uH81a4U0p0X%2F5oRRJctsEhOGu9RE5y2LdIEedoKNvZUSeNp7ojvTQze0MPX0y78GOqUBU0thMnBR5t6RfxW%2F1shdhNRxYJc%2FzReq2yPU37BTAFHP4%2BmKneqZSHGjPdy%2BRtQQpiZ%2BVdsKAk15yx9pNTCISdrXSVWecSFz1eOs4PaYoy2Z1tP2Y4ke1mKqwE%2FHrklMybRjt%2BxiKgC9GT4dKGMRUkyRXqsMGWPi%2BSu27KDPIOtXIJsP7j8brva4R69ly0Mc5tjvDYsDInrNR%2F7HKGYgVfsGH5%2Fs&X-Amz-Signature=5daff717695c14e16cf382de9b2650fe7dfeae18d0e3943c239bdeae4014ddec&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHKNLWN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjoy%2BaHCe8TYsYH%2FFmz1qqze4L%2B1NdF6i9%2BTZ6Gkr6gIgBB69wESayQ5%2FaiwdFgXfkFopbIKQL52rfdPnDqfSV5cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIFzynwUteBz0nkw%2FCrcAxj2vlGItY2UmBhewLBe6y0IEgGhawGvLzCn5lQmnaELbaqSDqWoRL1rrt3GoeY9%2BBa4mUob5Bky01QcbxQda7XQtSoM7Bli5ybnzr3PZ87MwlMgtPBy4s8tUowxZYatzBe1Fm7N2owAcmWAPZx%2FFWjfzmSkeq%2BOh7kJHjF0qcUK2htYm11Yz0xJR%2FZrnf3mG20hILkR8dswrFFoTb9d6vmyRyJE8o9x7hyKWXryL5Q4JatIcsr0plwtXkzzmSktgizH36VEhFtHuHYf1%2Bkam%2FqBTsdCjO5CRPY3wnOtpOUkvruBmeNT%2BqmBO2CElkxprqGk%2BT%2BWubI9oyjNmm34OObjYBrPtbdsR8x9KF2Cadfj3HBads9%2Ffch7JQCTKAIOprREKceXedzXInRoKqXknFeuotJ4%2FM6SvibUhne2QqsLpa%2FF7QlLT1MtjtCuQ3z0JDEpsbcluKD4sV8%2BskGd19wWehp%2FRM%2BLStIYCzEnkb1F4oFgsTQ%2Fow%2FWWe5S8rqSy4PZbx1Kg3TKCJp8C3QGq732AMVJf8rBYviQWc%2BSxoAjbXTLx0IVY8SYvra%2Fa5bUKHz7uH81a4U0p0X%2F5oRRJctsEhOGu9RE5y2LdIEedoKNvZUSeNp7ojvTQze0MPX0y78GOqUBU0thMnBR5t6RfxW%2F1shdhNRxYJc%2FzReq2yPU37BTAFHP4%2BmKneqZSHGjPdy%2BRtQQpiZ%2BVdsKAk15yx9pNTCISdrXSVWecSFz1eOs4PaYoy2Z1tP2Y4ke1mKqwE%2FHrklMybRjt%2BxiKgC9GT4dKGMRUkyRXqsMGWPi%2BSu27KDPIOtXIJsP7j8brva4R69ly0Mc5tjvDYsDInrNR%2F7HKGYgVfsGH5%2Fs&X-Amz-Signature=0931b7fb2b18fa38e6d055593bda034dba2c78f0855939df8985120b97491164&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHKNLWN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjoy%2BaHCe8TYsYH%2FFmz1qqze4L%2B1NdF6i9%2BTZ6Gkr6gIgBB69wESayQ5%2FaiwdFgXfkFopbIKQL52rfdPnDqfSV5cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIFzynwUteBz0nkw%2FCrcAxj2vlGItY2UmBhewLBe6y0IEgGhawGvLzCn5lQmnaELbaqSDqWoRL1rrt3GoeY9%2BBa4mUob5Bky01QcbxQda7XQtSoM7Bli5ybnzr3PZ87MwlMgtPBy4s8tUowxZYatzBe1Fm7N2owAcmWAPZx%2FFWjfzmSkeq%2BOh7kJHjF0qcUK2htYm11Yz0xJR%2FZrnf3mG20hILkR8dswrFFoTb9d6vmyRyJE8o9x7hyKWXryL5Q4JatIcsr0plwtXkzzmSktgizH36VEhFtHuHYf1%2Bkam%2FqBTsdCjO5CRPY3wnOtpOUkvruBmeNT%2BqmBO2CElkxprqGk%2BT%2BWubI9oyjNmm34OObjYBrPtbdsR8x9KF2Cadfj3HBads9%2Ffch7JQCTKAIOprREKceXedzXInRoKqXknFeuotJ4%2FM6SvibUhne2QqsLpa%2FF7QlLT1MtjtCuQ3z0JDEpsbcluKD4sV8%2BskGd19wWehp%2FRM%2BLStIYCzEnkb1F4oFgsTQ%2Fow%2FWWe5S8rqSy4PZbx1Kg3TKCJp8C3QGq732AMVJf8rBYviQWc%2BSxoAjbXTLx0IVY8SYvra%2Fa5bUKHz7uH81a4U0p0X%2F5oRRJctsEhOGu9RE5y2LdIEedoKNvZUSeNp7ojvTQze0MPX0y78GOqUBU0thMnBR5t6RfxW%2F1shdhNRxYJc%2FzReq2yPU37BTAFHP4%2BmKneqZSHGjPdy%2BRtQQpiZ%2BVdsKAk15yx9pNTCISdrXSVWecSFz1eOs4PaYoy2Z1tP2Y4ke1mKqwE%2FHrklMybRjt%2BxiKgC9GT4dKGMRUkyRXqsMGWPi%2BSu27KDPIOtXIJsP7j8brva4R69ly0Mc5tjvDYsDInrNR%2F7HKGYgVfsGH5%2Fs&X-Amz-Signature=8d00613d8e2327e6694a879cc6a78d3e21ca5224e6610c24baa8d1bee3b4a192&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IHKNLWN%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYjoy%2BaHCe8TYsYH%2FFmz1qqze4L%2B1NdF6i9%2BTZ6Gkr6gIgBB69wESayQ5%2FaiwdFgXfkFopbIKQL52rfdPnDqfSV5cq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIFzynwUteBz0nkw%2FCrcAxj2vlGItY2UmBhewLBe6y0IEgGhawGvLzCn5lQmnaELbaqSDqWoRL1rrt3GoeY9%2BBa4mUob5Bky01QcbxQda7XQtSoM7Bli5ybnzr3PZ87MwlMgtPBy4s8tUowxZYatzBe1Fm7N2owAcmWAPZx%2FFWjfzmSkeq%2BOh7kJHjF0qcUK2htYm11Yz0xJR%2FZrnf3mG20hILkR8dswrFFoTb9d6vmyRyJE8o9x7hyKWXryL5Q4JatIcsr0plwtXkzzmSktgizH36VEhFtHuHYf1%2Bkam%2FqBTsdCjO5CRPY3wnOtpOUkvruBmeNT%2BqmBO2CElkxprqGk%2BT%2BWubI9oyjNmm34OObjYBrPtbdsR8x9KF2Cadfj3HBads9%2Ffch7JQCTKAIOprREKceXedzXInRoKqXknFeuotJ4%2FM6SvibUhne2QqsLpa%2FF7QlLT1MtjtCuQ3z0JDEpsbcluKD4sV8%2BskGd19wWehp%2FRM%2BLStIYCzEnkb1F4oFgsTQ%2Fow%2FWWe5S8rqSy4PZbx1Kg3TKCJp8C3QGq732AMVJf8rBYviQWc%2BSxoAjbXTLx0IVY8SYvra%2Fa5bUKHz7uH81a4U0p0X%2F5oRRJctsEhOGu9RE5y2LdIEedoKNvZUSeNp7ojvTQze0MPX0y78GOqUBU0thMnBR5t6RfxW%2F1shdhNRxYJc%2FzReq2yPU37BTAFHP4%2BmKneqZSHGjPdy%2BRtQQpiZ%2BVdsKAk15yx9pNTCISdrXSVWecSFz1eOs4PaYoy2Z1tP2Y4ke1mKqwE%2FHrklMybRjt%2BxiKgC9GT4dKGMRUkyRXqsMGWPi%2BSu27KDPIOtXIJsP7j8brva4R69ly0Mc5tjvDYsDInrNR%2F7HKGYgVfsGH5%2Fs&X-Amz-Signature=c15d5a5bcb08f1e7bdf43a395aae0dfb331558d6f0cd76b044cb433f9720bda2&X-Amz-SignedHeaders=host&x-id=GetObject)
