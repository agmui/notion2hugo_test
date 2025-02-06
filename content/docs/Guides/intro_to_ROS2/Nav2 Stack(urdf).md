---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O25UZ3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEXLsqPieq8DnAdtSYEcMH9BPB9fpm7LA3Xq5OsRKxbIAiEA9uiH5BIE4Z%2BBPT2e2yQ9MdciFcM7iY6g%2Bp%2BAzfMI2F8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEQdYw5j0%2FHWjNeL1CrcAyvPNimNpDQM45CUGvRpuTUsOjA%2Fl%2Fq2VGB4MmOzTEUKz0Ha7nPpWAvj56ZQX0rpUYjaDWbNr1XDqmi4RCUHj3lTrK84xVQUKY2LT6nNgD%2FyHnv1TFsMwfbQ3w%2F%2BMo2cND3AIrjMMePpgUET6RBxey6zZoRqQQT6o7ZORtSNRjK5V2qpcm5Ob1K5Fy7pCArttEcHz6W8cGDkDr63TskRYlctDfiY%2FAd28jv1w%2FEMltwJUUYGoczFsbOdXtG0oLwdF%2B1YljZ0DA15M8h7bmr3gOghkYuSBHQw6VNm7tD6dv63dOv070esw%2B7S8Zl8LKqCQozLGsYv8Ylc%2FU6ATuWS%2F0es41kzNzToRMfNnAlVK1QxzfopyiRHFgTE5h05AGtkN9WbHh%2BHlCslL63AUav6%2FEGjU40pCe5kWjhJik%2Fk7wmTg8XrMHrplVJN4vjewODO%2Bt2K1n5HkarLUXPSyfUm72m1cWvlFXY6Td60U9YW1dzsn5M4fkeVteswq7KzsgubTumXBd1z9oaKSBSOV49YXfMKdCPy7HuUbBRzD483Fa6%2FiEaOKnSLB7hGwk%2BNL7BdxPStg8LZ%2BWJb18UfsR%2FFP5ZYHeT6QTcvKBpbN8EFbB8b25Vw%2BbnAByZpkTKjMOLsj70GOqUBi4cZp0Br%2FqohaZ%2BAyXYGvGbu%2BttGfm2kaSqt1U4dW5KwlaagHe0DaN%2FMIt4gio67v2S8LRDLv6vqlpXac6UMZoiiZx51RAgnCCTD5Q8rDdcsFp4ndPcjGqyZeR6eOgYRbb%2FKHSoSnWPFSRcWk3lbPPRsXMwTyLSD%2FFWYTKd25I3QjRuionR0SVmnAGNwNyFnpYnkAAqOvv7zxl1x9vtsnojQt21U&X-Amz-Signature=47698cfc513720ac347faddbc0ad5af45fa9bcd5440745f87dccc0216815a441&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O25UZ3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEXLsqPieq8DnAdtSYEcMH9BPB9fpm7LA3Xq5OsRKxbIAiEA9uiH5BIE4Z%2BBPT2e2yQ9MdciFcM7iY6g%2Bp%2BAzfMI2F8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEQdYw5j0%2FHWjNeL1CrcAyvPNimNpDQM45CUGvRpuTUsOjA%2Fl%2Fq2VGB4MmOzTEUKz0Ha7nPpWAvj56ZQX0rpUYjaDWbNr1XDqmi4RCUHj3lTrK84xVQUKY2LT6nNgD%2FyHnv1TFsMwfbQ3w%2F%2BMo2cND3AIrjMMePpgUET6RBxey6zZoRqQQT6o7ZORtSNRjK5V2qpcm5Ob1K5Fy7pCArttEcHz6W8cGDkDr63TskRYlctDfiY%2FAd28jv1w%2FEMltwJUUYGoczFsbOdXtG0oLwdF%2B1YljZ0DA15M8h7bmr3gOghkYuSBHQw6VNm7tD6dv63dOv070esw%2B7S8Zl8LKqCQozLGsYv8Ylc%2FU6ATuWS%2F0es41kzNzToRMfNnAlVK1QxzfopyiRHFgTE5h05AGtkN9WbHh%2BHlCslL63AUav6%2FEGjU40pCe5kWjhJik%2Fk7wmTg8XrMHrplVJN4vjewODO%2Bt2K1n5HkarLUXPSyfUm72m1cWvlFXY6Td60U9YW1dzsn5M4fkeVteswq7KzsgubTumXBd1z9oaKSBSOV49YXfMKdCPy7HuUbBRzD483Fa6%2FiEaOKnSLB7hGwk%2BNL7BdxPStg8LZ%2BWJb18UfsR%2FFP5ZYHeT6QTcvKBpbN8EFbB8b25Vw%2BbnAByZpkTKjMOLsj70GOqUBi4cZp0Br%2FqohaZ%2BAyXYGvGbu%2BttGfm2kaSqt1U4dW5KwlaagHe0DaN%2FMIt4gio67v2S8LRDLv6vqlpXac6UMZoiiZx51RAgnCCTD5Q8rDdcsFp4ndPcjGqyZeR6eOgYRbb%2FKHSoSnWPFSRcWk3lbPPRsXMwTyLSD%2FFWYTKd25I3QjRuionR0SVmnAGNwNyFnpYnkAAqOvv7zxl1x9vtsnojQt21U&X-Amz-Signature=95a265cb7a59ed5b315ef68326b4af0c66d5d0d0bf5dd32cb1f2c11dd10deb93&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O25UZ3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEXLsqPieq8DnAdtSYEcMH9BPB9fpm7LA3Xq5OsRKxbIAiEA9uiH5BIE4Z%2BBPT2e2yQ9MdciFcM7iY6g%2Bp%2BAzfMI2F8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEQdYw5j0%2FHWjNeL1CrcAyvPNimNpDQM45CUGvRpuTUsOjA%2Fl%2Fq2VGB4MmOzTEUKz0Ha7nPpWAvj56ZQX0rpUYjaDWbNr1XDqmi4RCUHj3lTrK84xVQUKY2LT6nNgD%2FyHnv1TFsMwfbQ3w%2F%2BMo2cND3AIrjMMePpgUET6RBxey6zZoRqQQT6o7ZORtSNRjK5V2qpcm5Ob1K5Fy7pCArttEcHz6W8cGDkDr63TskRYlctDfiY%2FAd28jv1w%2FEMltwJUUYGoczFsbOdXtG0oLwdF%2B1YljZ0DA15M8h7bmr3gOghkYuSBHQw6VNm7tD6dv63dOv070esw%2B7S8Zl8LKqCQozLGsYv8Ylc%2FU6ATuWS%2F0es41kzNzToRMfNnAlVK1QxzfopyiRHFgTE5h05AGtkN9WbHh%2BHlCslL63AUav6%2FEGjU40pCe5kWjhJik%2Fk7wmTg8XrMHrplVJN4vjewODO%2Bt2K1n5HkarLUXPSyfUm72m1cWvlFXY6Td60U9YW1dzsn5M4fkeVteswq7KzsgubTumXBd1z9oaKSBSOV49YXfMKdCPy7HuUbBRzD483Fa6%2FiEaOKnSLB7hGwk%2BNL7BdxPStg8LZ%2BWJb18UfsR%2FFP5ZYHeT6QTcvKBpbN8EFbB8b25Vw%2BbnAByZpkTKjMOLsj70GOqUBi4cZp0Br%2FqohaZ%2BAyXYGvGbu%2BttGfm2kaSqt1U4dW5KwlaagHe0DaN%2FMIt4gio67v2S8LRDLv6vqlpXac6UMZoiiZx51RAgnCCTD5Q8rDdcsFp4ndPcjGqyZeR6eOgYRbb%2FKHSoSnWPFSRcWk3lbPPRsXMwTyLSD%2FFWYTKd25I3QjRuionR0SVmnAGNwNyFnpYnkAAqOvv7zxl1x9vtsnojQt21U&X-Amz-Signature=5fed8fd4da72d1628a0cae939958abc270a7cb80419527cbf830f5734e8364c4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O25UZ3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEXLsqPieq8DnAdtSYEcMH9BPB9fpm7LA3Xq5OsRKxbIAiEA9uiH5BIE4Z%2BBPT2e2yQ9MdciFcM7iY6g%2Bp%2BAzfMI2F8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEQdYw5j0%2FHWjNeL1CrcAyvPNimNpDQM45CUGvRpuTUsOjA%2Fl%2Fq2VGB4MmOzTEUKz0Ha7nPpWAvj56ZQX0rpUYjaDWbNr1XDqmi4RCUHj3lTrK84xVQUKY2LT6nNgD%2FyHnv1TFsMwfbQ3w%2F%2BMo2cND3AIrjMMePpgUET6RBxey6zZoRqQQT6o7ZORtSNRjK5V2qpcm5Ob1K5Fy7pCArttEcHz6W8cGDkDr63TskRYlctDfiY%2FAd28jv1w%2FEMltwJUUYGoczFsbOdXtG0oLwdF%2B1YljZ0DA15M8h7bmr3gOghkYuSBHQw6VNm7tD6dv63dOv070esw%2B7S8Zl8LKqCQozLGsYv8Ylc%2FU6ATuWS%2F0es41kzNzToRMfNnAlVK1QxzfopyiRHFgTE5h05AGtkN9WbHh%2BHlCslL63AUav6%2FEGjU40pCe5kWjhJik%2Fk7wmTg8XrMHrplVJN4vjewODO%2Bt2K1n5HkarLUXPSyfUm72m1cWvlFXY6Td60U9YW1dzsn5M4fkeVteswq7KzsgubTumXBd1z9oaKSBSOV49YXfMKdCPy7HuUbBRzD483Fa6%2FiEaOKnSLB7hGwk%2BNL7BdxPStg8LZ%2BWJb18UfsR%2FFP5ZYHeT6QTcvKBpbN8EFbB8b25Vw%2BbnAByZpkTKjMOLsj70GOqUBi4cZp0Br%2FqohaZ%2BAyXYGvGbu%2BttGfm2kaSqt1U4dW5KwlaagHe0DaN%2FMIt4gio67v2S8LRDLv6vqlpXac6UMZoiiZx51RAgnCCTD5Q8rDdcsFp4ndPcjGqyZeR6eOgYRbb%2FKHSoSnWPFSRcWk3lbPPRsXMwTyLSD%2FFWYTKd25I3QjRuionR0SVmnAGNwNyFnpYnkAAqOvv7zxl1x9vtsnojQt21U&X-Amz-Signature=e8a2a7da400884849feea696d9022a9884c5460eda79dd8a32233bc179722aee&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O25UZ3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003603Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEXLsqPieq8DnAdtSYEcMH9BPB9fpm7LA3Xq5OsRKxbIAiEA9uiH5BIE4Z%2BBPT2e2yQ9MdciFcM7iY6g%2Bp%2BAzfMI2F8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEQdYw5j0%2FHWjNeL1CrcAyvPNimNpDQM45CUGvRpuTUsOjA%2Fl%2Fq2VGB4MmOzTEUKz0Ha7nPpWAvj56ZQX0rpUYjaDWbNr1XDqmi4RCUHj3lTrK84xVQUKY2LT6nNgD%2FyHnv1TFsMwfbQ3w%2F%2BMo2cND3AIrjMMePpgUET6RBxey6zZoRqQQT6o7ZORtSNRjK5V2qpcm5Ob1K5Fy7pCArttEcHz6W8cGDkDr63TskRYlctDfiY%2FAd28jv1w%2FEMltwJUUYGoczFsbOdXtG0oLwdF%2B1YljZ0DA15M8h7bmr3gOghkYuSBHQw6VNm7tD6dv63dOv070esw%2B7S8Zl8LKqCQozLGsYv8Ylc%2FU6ATuWS%2F0es41kzNzToRMfNnAlVK1QxzfopyiRHFgTE5h05AGtkN9WbHh%2BHlCslL63AUav6%2FEGjU40pCe5kWjhJik%2Fk7wmTg8XrMHrplVJN4vjewODO%2Bt2K1n5HkarLUXPSyfUm72m1cWvlFXY6Td60U9YW1dzsn5M4fkeVteswq7KzsgubTumXBd1z9oaKSBSOV49YXfMKdCPy7HuUbBRzD483Fa6%2FiEaOKnSLB7hGwk%2BNL7BdxPStg8LZ%2BWJb18UfsR%2FFP5ZYHeT6QTcvKBpbN8EFbB8b25Vw%2BbnAByZpkTKjMOLsj70GOqUBi4cZp0Br%2FqohaZ%2BAyXYGvGbu%2BttGfm2kaSqt1U4dW5KwlaagHe0DaN%2FMIt4gio67v2S8LRDLv6vqlpXac6UMZoiiZx51RAgnCCTD5Q8rDdcsFp4ndPcjGqyZeR6eOgYRbb%2FKHSoSnWPFSRcWk3lbPPRsXMwTyLSD%2FFWYTKd25I3QjRuionR0SVmnAGNwNyFnpYnkAAqOvv7zxl1x9vtsnojQt21U&X-Amz-Signature=aa3696d3e8b1ea046ea0b93b7d48754383b45dd0caa4ad5a904ac42bddb21ba7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4O25UZ3%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T003602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIEXLsqPieq8DnAdtSYEcMH9BPB9fpm7LA3Xq5OsRKxbIAiEA9uiH5BIE4Z%2BBPT2e2yQ9MdciFcM7iY6g%2Bp%2BAzfMI2F8q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDEQdYw5j0%2FHWjNeL1CrcAyvPNimNpDQM45CUGvRpuTUsOjA%2Fl%2Fq2VGB4MmOzTEUKz0Ha7nPpWAvj56ZQX0rpUYjaDWbNr1XDqmi4RCUHj3lTrK84xVQUKY2LT6nNgD%2FyHnv1TFsMwfbQ3w%2F%2BMo2cND3AIrjMMePpgUET6RBxey6zZoRqQQT6o7ZORtSNRjK5V2qpcm5Ob1K5Fy7pCArttEcHz6W8cGDkDr63TskRYlctDfiY%2FAd28jv1w%2FEMltwJUUYGoczFsbOdXtG0oLwdF%2B1YljZ0DA15M8h7bmr3gOghkYuSBHQw6VNm7tD6dv63dOv070esw%2B7S8Zl8LKqCQozLGsYv8Ylc%2FU6ATuWS%2F0es41kzNzToRMfNnAlVK1QxzfopyiRHFgTE5h05AGtkN9WbHh%2BHlCslL63AUav6%2FEGjU40pCe5kWjhJik%2Fk7wmTg8XrMHrplVJN4vjewODO%2Bt2K1n5HkarLUXPSyfUm72m1cWvlFXY6Td60U9YW1dzsn5M4fkeVteswq7KzsgubTumXBd1z9oaKSBSOV49YXfMKdCPy7HuUbBRzD483Fa6%2FiEaOKnSLB7hGwk%2BNL7BdxPStg8LZ%2BWJb18UfsR%2FFP5ZYHeT6QTcvKBpbN8EFbB8b25Vw%2BbnAByZpkTKjMOLsj70GOqUBi4cZp0Br%2FqohaZ%2BAyXYGvGbu%2BttGfm2kaSqt1U4dW5KwlaagHe0DaN%2FMIt4gio67v2S8LRDLv6vqlpXac6UMZoiiZx51RAgnCCTD5Q8rDdcsFp4ndPcjGqyZeR6eOgYRbb%2FKHSoSnWPFSRcWk3lbPPRsXMwTyLSD%2FFWYTKd25I3QjRuionR0SVmnAGNwNyFnpYnkAAqOvv7zxl1x9vtsnojQt21U&X-Amz-Signature=da2ce1706f388e088d3073d4b74e30e9f7430ab48e98238eb2908f912b6fe76c&X-Amz-SignedHeaders=host&x-id=GetObject)
