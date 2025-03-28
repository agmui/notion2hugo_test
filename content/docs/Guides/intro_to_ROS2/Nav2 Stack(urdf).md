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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQA2O7V%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMDHj91dAwLgKeF3XL00NczuEVftpmJ2lwsHjtjfm4CAiEAyuAlE6wveAzyBn3Ytelb5cQAZlfsPQSrwK7a8wv%2Fw7Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJX5Oue0KHTgn4navyrcA3%2Fc9NMiT9HNWsJEHedtGGS1bBDytDoWuRlagBVfHHThSQrHnwl4%2FzGZfw3El%2FIRlIf3ttfGTUa4an%2FK%2BscKDaI5geW%2FfvO457GZEAGqog55toD5v6FrTFkIi7NC6hQBRv0CU58Zzf7qeT8cLDgwriXCK4zWPf5JsXNeHd1wRPXNn0nzut3SsY7E5QqJXQkOJYsEQ5U%2BfwnB9IJQ7RcnlodwJICSxJPHk2sfzsLHWRfvBq%2BkltzSClTCFd76cPO68GVZOzjkOtPcJR9PlH3%2F20Oe65P8L%2BZyk%2FB85L6iBYmy9pHYawmbjlj32Pbd67G7CzWjTnwl4zZEVzyFE9i0rOklnY%2Be6a7xjJVNzMcJhI7orQHmJW%2FQyyWrX%2F%2BEDtUg4AxeGE3pK7dPxWJkzMGZ%2FilW9QQXj%2Fcqy1VN9OjMcz6yjckGkX3FQ6J3wcL%2F%2FKmF0b0RLZmuR0pE0c5QYmLJPgDSHeqiM6H2DGpfUtVhUlv9bzoJn3pWhbw34Mq9leFTA711qt0%2B6xu1vARUYztlt25OdpbMoUjcb%2BGPyqnk5ENwUk7%2Fu3JBSQTmgbOVhnQCgRMMM9%2BQHcE1KYJBNe0rLf8usezZRLRvW96MbkzDz8gbbMhccaxXwp0NusG4MJvcmb8GOqUBSzJGOP0ucEC7uRUmtB%2FbzQMdB0EKFYynKws2lsQRKyzisW2HYFW74wN8FjDpY78EDEsMW1TLHzrnF3YubQBYszNmvn3Hn%2FxmyFvfkqsx%2BmtSAJGIRJfMr1qceI9EiLH3eGuZ0oKbtjpW%2BwQ47NqnGDB%2FCSaXpJ5fnEN0Z03%2BxmWtov2V0AsEQRiiQAmmbLYB433dfhPvIm%2Ff3Ks4GTx%2FDPvPs60c&X-Amz-Signature=03dea8aaf5e58d486b79c7894e6665db8e9b7ee6b2eff76d0daf4c095db3d06d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQA2O7V%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMDHj91dAwLgKeF3XL00NczuEVftpmJ2lwsHjtjfm4CAiEAyuAlE6wveAzyBn3Ytelb5cQAZlfsPQSrwK7a8wv%2Fw7Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJX5Oue0KHTgn4navyrcA3%2Fc9NMiT9HNWsJEHedtGGS1bBDytDoWuRlagBVfHHThSQrHnwl4%2FzGZfw3El%2FIRlIf3ttfGTUa4an%2FK%2BscKDaI5geW%2FfvO457GZEAGqog55toD5v6FrTFkIi7NC6hQBRv0CU58Zzf7qeT8cLDgwriXCK4zWPf5JsXNeHd1wRPXNn0nzut3SsY7E5QqJXQkOJYsEQ5U%2BfwnB9IJQ7RcnlodwJICSxJPHk2sfzsLHWRfvBq%2BkltzSClTCFd76cPO68GVZOzjkOtPcJR9PlH3%2F20Oe65P8L%2BZyk%2FB85L6iBYmy9pHYawmbjlj32Pbd67G7CzWjTnwl4zZEVzyFE9i0rOklnY%2Be6a7xjJVNzMcJhI7orQHmJW%2FQyyWrX%2F%2BEDtUg4AxeGE3pK7dPxWJkzMGZ%2FilW9QQXj%2Fcqy1VN9OjMcz6yjckGkX3FQ6J3wcL%2F%2FKmF0b0RLZmuR0pE0c5QYmLJPgDSHeqiM6H2DGpfUtVhUlv9bzoJn3pWhbw34Mq9leFTA711qt0%2B6xu1vARUYztlt25OdpbMoUjcb%2BGPyqnk5ENwUk7%2Fu3JBSQTmgbOVhnQCgRMMM9%2BQHcE1KYJBNe0rLf8usezZRLRvW96MbkzDz8gbbMhccaxXwp0NusG4MJvcmb8GOqUBSzJGOP0ucEC7uRUmtB%2FbzQMdB0EKFYynKws2lsQRKyzisW2HYFW74wN8FjDpY78EDEsMW1TLHzrnF3YubQBYszNmvn3Hn%2FxmyFvfkqsx%2BmtSAJGIRJfMr1qceI9EiLH3eGuZ0oKbtjpW%2BwQ47NqnGDB%2FCSaXpJ5fnEN0Z03%2BxmWtov2V0AsEQRiiQAmmbLYB433dfhPvIm%2Ff3Ks4GTx%2FDPvPs60c&X-Amz-Signature=c0e6d2222e0c20f2ace7f2d5ae387f8124eaabe2eb54de00d04e1b98636e9739&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQA2O7V%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMDHj91dAwLgKeF3XL00NczuEVftpmJ2lwsHjtjfm4CAiEAyuAlE6wveAzyBn3Ytelb5cQAZlfsPQSrwK7a8wv%2Fw7Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJX5Oue0KHTgn4navyrcA3%2Fc9NMiT9HNWsJEHedtGGS1bBDytDoWuRlagBVfHHThSQrHnwl4%2FzGZfw3El%2FIRlIf3ttfGTUa4an%2FK%2BscKDaI5geW%2FfvO457GZEAGqog55toD5v6FrTFkIi7NC6hQBRv0CU58Zzf7qeT8cLDgwriXCK4zWPf5JsXNeHd1wRPXNn0nzut3SsY7E5QqJXQkOJYsEQ5U%2BfwnB9IJQ7RcnlodwJICSxJPHk2sfzsLHWRfvBq%2BkltzSClTCFd76cPO68GVZOzjkOtPcJR9PlH3%2F20Oe65P8L%2BZyk%2FB85L6iBYmy9pHYawmbjlj32Pbd67G7CzWjTnwl4zZEVzyFE9i0rOklnY%2Be6a7xjJVNzMcJhI7orQHmJW%2FQyyWrX%2F%2BEDtUg4AxeGE3pK7dPxWJkzMGZ%2FilW9QQXj%2Fcqy1VN9OjMcz6yjckGkX3FQ6J3wcL%2F%2FKmF0b0RLZmuR0pE0c5QYmLJPgDSHeqiM6H2DGpfUtVhUlv9bzoJn3pWhbw34Mq9leFTA711qt0%2B6xu1vARUYztlt25OdpbMoUjcb%2BGPyqnk5ENwUk7%2Fu3JBSQTmgbOVhnQCgRMMM9%2BQHcE1KYJBNe0rLf8usezZRLRvW96MbkzDz8gbbMhccaxXwp0NusG4MJvcmb8GOqUBSzJGOP0ucEC7uRUmtB%2FbzQMdB0EKFYynKws2lsQRKyzisW2HYFW74wN8FjDpY78EDEsMW1TLHzrnF3YubQBYszNmvn3Hn%2FxmyFvfkqsx%2BmtSAJGIRJfMr1qceI9EiLH3eGuZ0oKbtjpW%2BwQ47NqnGDB%2FCSaXpJ5fnEN0Z03%2BxmWtov2V0AsEQRiiQAmmbLYB433dfhPvIm%2Ff3Ks4GTx%2FDPvPs60c&X-Amz-Signature=1d161002ebf398cd0eac6020a8eb1364c65a9845b16ddf2bd7921badae3ca8bd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQA2O7V%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMDHj91dAwLgKeF3XL00NczuEVftpmJ2lwsHjtjfm4CAiEAyuAlE6wveAzyBn3Ytelb5cQAZlfsPQSrwK7a8wv%2Fw7Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJX5Oue0KHTgn4navyrcA3%2Fc9NMiT9HNWsJEHedtGGS1bBDytDoWuRlagBVfHHThSQrHnwl4%2FzGZfw3El%2FIRlIf3ttfGTUa4an%2FK%2BscKDaI5geW%2FfvO457GZEAGqog55toD5v6FrTFkIi7NC6hQBRv0CU58Zzf7qeT8cLDgwriXCK4zWPf5JsXNeHd1wRPXNn0nzut3SsY7E5QqJXQkOJYsEQ5U%2BfwnB9IJQ7RcnlodwJICSxJPHk2sfzsLHWRfvBq%2BkltzSClTCFd76cPO68GVZOzjkOtPcJR9PlH3%2F20Oe65P8L%2BZyk%2FB85L6iBYmy9pHYawmbjlj32Pbd67G7CzWjTnwl4zZEVzyFE9i0rOklnY%2Be6a7xjJVNzMcJhI7orQHmJW%2FQyyWrX%2F%2BEDtUg4AxeGE3pK7dPxWJkzMGZ%2FilW9QQXj%2Fcqy1VN9OjMcz6yjckGkX3FQ6J3wcL%2F%2FKmF0b0RLZmuR0pE0c5QYmLJPgDSHeqiM6H2DGpfUtVhUlv9bzoJn3pWhbw34Mq9leFTA711qt0%2B6xu1vARUYztlt25OdpbMoUjcb%2BGPyqnk5ENwUk7%2Fu3JBSQTmgbOVhnQCgRMMM9%2BQHcE1KYJBNe0rLf8usezZRLRvW96MbkzDz8gbbMhccaxXwp0NusG4MJvcmb8GOqUBSzJGOP0ucEC7uRUmtB%2FbzQMdB0EKFYynKws2lsQRKyzisW2HYFW74wN8FjDpY78EDEsMW1TLHzrnF3YubQBYszNmvn3Hn%2FxmyFvfkqsx%2BmtSAJGIRJfMr1qceI9EiLH3eGuZ0oKbtjpW%2BwQ47NqnGDB%2FCSaXpJ5fnEN0Z03%2BxmWtov2V0AsEQRiiQAmmbLYB433dfhPvIm%2Ff3Ks4GTx%2FDPvPs60c&X-Amz-Signature=a332e0e912bdec4afa5e8d6f5f95219e166704236061be2415ae779690ee1f22&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQA2O7V%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMDHj91dAwLgKeF3XL00NczuEVftpmJ2lwsHjtjfm4CAiEAyuAlE6wveAzyBn3Ytelb5cQAZlfsPQSrwK7a8wv%2Fw7Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJX5Oue0KHTgn4navyrcA3%2Fc9NMiT9HNWsJEHedtGGS1bBDytDoWuRlagBVfHHThSQrHnwl4%2FzGZfw3El%2FIRlIf3ttfGTUa4an%2FK%2BscKDaI5geW%2FfvO457GZEAGqog55toD5v6FrTFkIi7NC6hQBRv0CU58Zzf7qeT8cLDgwriXCK4zWPf5JsXNeHd1wRPXNn0nzut3SsY7E5QqJXQkOJYsEQ5U%2BfwnB9IJQ7RcnlodwJICSxJPHk2sfzsLHWRfvBq%2BkltzSClTCFd76cPO68GVZOzjkOtPcJR9PlH3%2F20Oe65P8L%2BZyk%2FB85L6iBYmy9pHYawmbjlj32Pbd67G7CzWjTnwl4zZEVzyFE9i0rOklnY%2Be6a7xjJVNzMcJhI7orQHmJW%2FQyyWrX%2F%2BEDtUg4AxeGE3pK7dPxWJkzMGZ%2FilW9QQXj%2Fcqy1VN9OjMcz6yjckGkX3FQ6J3wcL%2F%2FKmF0b0RLZmuR0pE0c5QYmLJPgDSHeqiM6H2DGpfUtVhUlv9bzoJn3pWhbw34Mq9leFTA711qt0%2B6xu1vARUYztlt25OdpbMoUjcb%2BGPyqnk5ENwUk7%2Fu3JBSQTmgbOVhnQCgRMMM9%2BQHcE1KYJBNe0rLf8usezZRLRvW96MbkzDz8gbbMhccaxXwp0NusG4MJvcmb8GOqUBSzJGOP0ucEC7uRUmtB%2FbzQMdB0EKFYynKws2lsQRKyzisW2HYFW74wN8FjDpY78EDEsMW1TLHzrnF3YubQBYszNmvn3Hn%2FxmyFvfkqsx%2BmtSAJGIRJfMr1qceI9EiLH3eGuZ0oKbtjpW%2BwQ47NqnGDB%2FCSaXpJ5fnEN0Z03%2BxmWtov2V0AsEQRiiQAmmbLYB433dfhPvIm%2Ff3Ks4GTx%2FDPvPs60c&X-Amz-Signature=97627f151716dc5bc199f367b3cb890a1efc218e5006a0c3718b540a9d154f16&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWQA2O7V%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T100849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMDHj91dAwLgKeF3XL00NczuEVftpmJ2lwsHjtjfm4CAiEAyuAlE6wveAzyBn3Ytelb5cQAZlfsPQSrwK7a8wv%2Fw7Uq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDJX5Oue0KHTgn4navyrcA3%2Fc9NMiT9HNWsJEHedtGGS1bBDytDoWuRlagBVfHHThSQrHnwl4%2FzGZfw3El%2FIRlIf3ttfGTUa4an%2FK%2BscKDaI5geW%2FfvO457GZEAGqog55toD5v6FrTFkIi7NC6hQBRv0CU58Zzf7qeT8cLDgwriXCK4zWPf5JsXNeHd1wRPXNn0nzut3SsY7E5QqJXQkOJYsEQ5U%2BfwnB9IJQ7RcnlodwJICSxJPHk2sfzsLHWRfvBq%2BkltzSClTCFd76cPO68GVZOzjkOtPcJR9PlH3%2F20Oe65P8L%2BZyk%2FB85L6iBYmy9pHYawmbjlj32Pbd67G7CzWjTnwl4zZEVzyFE9i0rOklnY%2Be6a7xjJVNzMcJhI7orQHmJW%2FQyyWrX%2F%2BEDtUg4AxeGE3pK7dPxWJkzMGZ%2FilW9QQXj%2Fcqy1VN9OjMcz6yjckGkX3FQ6J3wcL%2F%2FKmF0b0RLZmuR0pE0c5QYmLJPgDSHeqiM6H2DGpfUtVhUlv9bzoJn3pWhbw34Mq9leFTA711qt0%2B6xu1vARUYztlt25OdpbMoUjcb%2BGPyqnk5ENwUk7%2Fu3JBSQTmgbOVhnQCgRMMM9%2BQHcE1KYJBNe0rLf8usezZRLRvW96MbkzDz8gbbMhccaxXwp0NusG4MJvcmb8GOqUBSzJGOP0ucEC7uRUmtB%2FbzQMdB0EKFYynKws2lsQRKyzisW2HYFW74wN8FjDpY78EDEsMW1TLHzrnF3YubQBYszNmvn3Hn%2FxmyFvfkqsx%2BmtSAJGIRJfMr1qceI9EiLH3eGuZ0oKbtjpW%2BwQ47NqnGDB%2FCSaXpJ5fnEN0Z03%2BxmWtov2V0AsEQRiiQAmmbLYB433dfhPvIm%2Ff3Ks4GTx%2FDPvPs60c&X-Amz-Signature=b96281da2b452b4bddc727009dd4e424022a08f610226ea6d5575fcdac378624&X-Amz-SignedHeaders=host&x-id=GetObject)
