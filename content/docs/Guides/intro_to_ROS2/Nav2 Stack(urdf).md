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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWK7WCT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC1l1LnYMfKNOo0Qhi2Xkj96TLmW5pMfnl6RXzEQpr3VAiEAm9iTq5tTfCoL6N17Tfjob4YeDkq42weaFMYFkB%2BuEJkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGe4e3RwWlmId%2BYLCrcA1YqKFiFSjC5S%2FYjcVnxeVtYyLXE7SnTzKT9b3CaobsOWoBudyneDeM09DwPdTP%2Bx%2BS7X%2FhqzNUzYJh9tuc%2Bms0zjFGL%2Bk1QBBUbbQ5mZI9RFYq2s3jz24TraxbFvofdPAN9YB%2F3IQaA5ePNGH33lpZZSlbDiK2ZIWd0dnilxTNaB9TkWqKXjo35Bu1r0KdQx0YfqweLTtD155Bpe5njZbjAmzevB21l1vq783AQiEwvBmFDZCn7%2F1YV7k1qG4wbcv2CqjPX0mwRWXQIkIHHZzrj%2BkLydxSvB%2FC4%2Fw2bPikZGaNLtHER6rkvo6muCGQYXMKYwJYlX20fy2I%2FRg3MBvE8GzSAGQgL0TqQtRuVLxTwGjJ7uCFf0PXidSU53RwUbVZ7TTZTtdk2cyBYWTrTJz1knMgtFeVNPwhmTks34eUNNDYye5bGb5z4uOghDvpjtMWouiLpE5v27xRdk3uSKaEnltFHo88bRL1H6GNlGtGlrA3W0nMh6I525eaUx7IQMJjtoM%2FZAC1zCcHhE8eW0hbPtBG%2FhtG%2BWzTDXkvzcos%2F0mlLCqrPH7Fj4ueeF9AE7VMm42ENdC2UyYoopqQ1pThVRkR%2FwxkGPiet7PpoCilFjptFy52IqZoLJoTUMNuuvr4GOqUBPN%2F0%2B4pBG%2BU5vPxmg39FYccoPAxLp9GBAdfEj84ECTL8q3LqATMLRs3FfNTeDOMW4wgY2wsjedLirTkYYjpXxubMC50qaS2wDiVK125B3BJfnBMzCMt2F26532lU%2FCibAmNCJBhmjczI1sHnnhxZajIZc%2Fad4p8GqZRe1fr9K4luFjD%2BRTGF3zgDyvYEOUs%2BMKciD395h1iKHbrSvfgg%2FSxaMe0H&X-Amz-Signature=22b99ac7e12cd3e9004329a8ee5934a939059a7dd5a83abc139217fef7485023&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWK7WCT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC1l1LnYMfKNOo0Qhi2Xkj96TLmW5pMfnl6RXzEQpr3VAiEAm9iTq5tTfCoL6N17Tfjob4YeDkq42weaFMYFkB%2BuEJkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGe4e3RwWlmId%2BYLCrcA1YqKFiFSjC5S%2FYjcVnxeVtYyLXE7SnTzKT9b3CaobsOWoBudyneDeM09DwPdTP%2Bx%2BS7X%2FhqzNUzYJh9tuc%2Bms0zjFGL%2Bk1QBBUbbQ5mZI9RFYq2s3jz24TraxbFvofdPAN9YB%2F3IQaA5ePNGH33lpZZSlbDiK2ZIWd0dnilxTNaB9TkWqKXjo35Bu1r0KdQx0YfqweLTtD155Bpe5njZbjAmzevB21l1vq783AQiEwvBmFDZCn7%2F1YV7k1qG4wbcv2CqjPX0mwRWXQIkIHHZzrj%2BkLydxSvB%2FC4%2Fw2bPikZGaNLtHER6rkvo6muCGQYXMKYwJYlX20fy2I%2FRg3MBvE8GzSAGQgL0TqQtRuVLxTwGjJ7uCFf0PXidSU53RwUbVZ7TTZTtdk2cyBYWTrTJz1knMgtFeVNPwhmTks34eUNNDYye5bGb5z4uOghDvpjtMWouiLpE5v27xRdk3uSKaEnltFHo88bRL1H6GNlGtGlrA3W0nMh6I525eaUx7IQMJjtoM%2FZAC1zCcHhE8eW0hbPtBG%2FhtG%2BWzTDXkvzcos%2F0mlLCqrPH7Fj4ueeF9AE7VMm42ENdC2UyYoopqQ1pThVRkR%2FwxkGPiet7PpoCilFjptFy52IqZoLJoTUMNuuvr4GOqUBPN%2F0%2B4pBG%2BU5vPxmg39FYccoPAxLp9GBAdfEj84ECTL8q3LqATMLRs3FfNTeDOMW4wgY2wsjedLirTkYYjpXxubMC50qaS2wDiVK125B3BJfnBMzCMt2F26532lU%2FCibAmNCJBhmjczI1sHnnhxZajIZc%2Fad4p8GqZRe1fr9K4luFjD%2BRTGF3zgDyvYEOUs%2BMKciD395h1iKHbrSvfgg%2FSxaMe0H&X-Amz-Signature=6ed73134ea8af37549e5f7ffcab0dddccb15793e8d2a61c1a888b72cab358752&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWK7WCT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC1l1LnYMfKNOo0Qhi2Xkj96TLmW5pMfnl6RXzEQpr3VAiEAm9iTq5tTfCoL6N17Tfjob4YeDkq42weaFMYFkB%2BuEJkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGe4e3RwWlmId%2BYLCrcA1YqKFiFSjC5S%2FYjcVnxeVtYyLXE7SnTzKT9b3CaobsOWoBudyneDeM09DwPdTP%2Bx%2BS7X%2FhqzNUzYJh9tuc%2Bms0zjFGL%2Bk1QBBUbbQ5mZI9RFYq2s3jz24TraxbFvofdPAN9YB%2F3IQaA5ePNGH33lpZZSlbDiK2ZIWd0dnilxTNaB9TkWqKXjo35Bu1r0KdQx0YfqweLTtD155Bpe5njZbjAmzevB21l1vq783AQiEwvBmFDZCn7%2F1YV7k1qG4wbcv2CqjPX0mwRWXQIkIHHZzrj%2BkLydxSvB%2FC4%2Fw2bPikZGaNLtHER6rkvo6muCGQYXMKYwJYlX20fy2I%2FRg3MBvE8GzSAGQgL0TqQtRuVLxTwGjJ7uCFf0PXidSU53RwUbVZ7TTZTtdk2cyBYWTrTJz1knMgtFeVNPwhmTks34eUNNDYye5bGb5z4uOghDvpjtMWouiLpE5v27xRdk3uSKaEnltFHo88bRL1H6GNlGtGlrA3W0nMh6I525eaUx7IQMJjtoM%2FZAC1zCcHhE8eW0hbPtBG%2FhtG%2BWzTDXkvzcos%2F0mlLCqrPH7Fj4ueeF9AE7VMm42ENdC2UyYoopqQ1pThVRkR%2FwxkGPiet7PpoCilFjptFy52IqZoLJoTUMNuuvr4GOqUBPN%2F0%2B4pBG%2BU5vPxmg39FYccoPAxLp9GBAdfEj84ECTL8q3LqATMLRs3FfNTeDOMW4wgY2wsjedLirTkYYjpXxubMC50qaS2wDiVK125B3BJfnBMzCMt2F26532lU%2FCibAmNCJBhmjczI1sHnnhxZajIZc%2Fad4p8GqZRe1fr9K4luFjD%2BRTGF3zgDyvYEOUs%2BMKciD395h1iKHbrSvfgg%2FSxaMe0H&X-Amz-Signature=6e7ebf9af76ccb48863e0fa0a5a561e4472472fc1360b5ff6118dba0692e5229&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWK7WCT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC1l1LnYMfKNOo0Qhi2Xkj96TLmW5pMfnl6RXzEQpr3VAiEAm9iTq5tTfCoL6N17Tfjob4YeDkq42weaFMYFkB%2BuEJkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGe4e3RwWlmId%2BYLCrcA1YqKFiFSjC5S%2FYjcVnxeVtYyLXE7SnTzKT9b3CaobsOWoBudyneDeM09DwPdTP%2Bx%2BS7X%2FhqzNUzYJh9tuc%2Bms0zjFGL%2Bk1QBBUbbQ5mZI9RFYq2s3jz24TraxbFvofdPAN9YB%2F3IQaA5ePNGH33lpZZSlbDiK2ZIWd0dnilxTNaB9TkWqKXjo35Bu1r0KdQx0YfqweLTtD155Bpe5njZbjAmzevB21l1vq783AQiEwvBmFDZCn7%2F1YV7k1qG4wbcv2CqjPX0mwRWXQIkIHHZzrj%2BkLydxSvB%2FC4%2Fw2bPikZGaNLtHER6rkvo6muCGQYXMKYwJYlX20fy2I%2FRg3MBvE8GzSAGQgL0TqQtRuVLxTwGjJ7uCFf0PXidSU53RwUbVZ7TTZTtdk2cyBYWTrTJz1knMgtFeVNPwhmTks34eUNNDYye5bGb5z4uOghDvpjtMWouiLpE5v27xRdk3uSKaEnltFHo88bRL1H6GNlGtGlrA3W0nMh6I525eaUx7IQMJjtoM%2FZAC1zCcHhE8eW0hbPtBG%2FhtG%2BWzTDXkvzcos%2F0mlLCqrPH7Fj4ueeF9AE7VMm42ENdC2UyYoopqQ1pThVRkR%2FwxkGPiet7PpoCilFjptFy52IqZoLJoTUMNuuvr4GOqUBPN%2F0%2B4pBG%2BU5vPxmg39FYccoPAxLp9GBAdfEj84ECTL8q3LqATMLRs3FfNTeDOMW4wgY2wsjedLirTkYYjpXxubMC50qaS2wDiVK125B3BJfnBMzCMt2F26532lU%2FCibAmNCJBhmjczI1sHnnhxZajIZc%2Fad4p8GqZRe1fr9K4luFjD%2BRTGF3zgDyvYEOUs%2BMKciD395h1iKHbrSvfgg%2FSxaMe0H&X-Amz-Signature=5ab3dce3f63cf6dd2c79daa80bd6f7742c822db20b1824989fa89a114aa40cb3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWK7WCT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC1l1LnYMfKNOo0Qhi2Xkj96TLmW5pMfnl6RXzEQpr3VAiEAm9iTq5tTfCoL6N17Tfjob4YeDkq42weaFMYFkB%2BuEJkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGe4e3RwWlmId%2BYLCrcA1YqKFiFSjC5S%2FYjcVnxeVtYyLXE7SnTzKT9b3CaobsOWoBudyneDeM09DwPdTP%2Bx%2BS7X%2FhqzNUzYJh9tuc%2Bms0zjFGL%2Bk1QBBUbbQ5mZI9RFYq2s3jz24TraxbFvofdPAN9YB%2F3IQaA5ePNGH33lpZZSlbDiK2ZIWd0dnilxTNaB9TkWqKXjo35Bu1r0KdQx0YfqweLTtD155Bpe5njZbjAmzevB21l1vq783AQiEwvBmFDZCn7%2F1YV7k1qG4wbcv2CqjPX0mwRWXQIkIHHZzrj%2BkLydxSvB%2FC4%2Fw2bPikZGaNLtHER6rkvo6muCGQYXMKYwJYlX20fy2I%2FRg3MBvE8GzSAGQgL0TqQtRuVLxTwGjJ7uCFf0PXidSU53RwUbVZ7TTZTtdk2cyBYWTrTJz1knMgtFeVNPwhmTks34eUNNDYye5bGb5z4uOghDvpjtMWouiLpE5v27xRdk3uSKaEnltFHo88bRL1H6GNlGtGlrA3W0nMh6I525eaUx7IQMJjtoM%2FZAC1zCcHhE8eW0hbPtBG%2FhtG%2BWzTDXkvzcos%2F0mlLCqrPH7Fj4ueeF9AE7VMm42ENdC2UyYoopqQ1pThVRkR%2FwxkGPiet7PpoCilFjptFy52IqZoLJoTUMNuuvr4GOqUBPN%2F0%2B4pBG%2BU5vPxmg39FYccoPAxLp9GBAdfEj84ECTL8q3LqATMLRs3FfNTeDOMW4wgY2wsjedLirTkYYjpXxubMC50qaS2wDiVK125B3BJfnBMzCMt2F26532lU%2FCibAmNCJBhmjczI1sHnnhxZajIZc%2Fad4p8GqZRe1fr9K4luFjD%2BRTGF3zgDyvYEOUs%2BMKciD395h1iKHbrSvfgg%2FSxaMe0H&X-Amz-Signature=77db5fea1a091bb099dfb2bd2deb17e438511a8811af4cdd14bf2bdd556d3802&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NWK7WCT%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T021553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIC1l1LnYMfKNOo0Qhi2Xkj96TLmW5pMfnl6RXzEQpr3VAiEAm9iTq5tTfCoL6N17Tfjob4YeDkq42weaFMYFkB%2BuEJkqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPGe4e3RwWlmId%2BYLCrcA1YqKFiFSjC5S%2FYjcVnxeVtYyLXE7SnTzKT9b3CaobsOWoBudyneDeM09DwPdTP%2Bx%2BS7X%2FhqzNUzYJh9tuc%2Bms0zjFGL%2Bk1QBBUbbQ5mZI9RFYq2s3jz24TraxbFvofdPAN9YB%2F3IQaA5ePNGH33lpZZSlbDiK2ZIWd0dnilxTNaB9TkWqKXjo35Bu1r0KdQx0YfqweLTtD155Bpe5njZbjAmzevB21l1vq783AQiEwvBmFDZCn7%2F1YV7k1qG4wbcv2CqjPX0mwRWXQIkIHHZzrj%2BkLydxSvB%2FC4%2Fw2bPikZGaNLtHER6rkvo6muCGQYXMKYwJYlX20fy2I%2FRg3MBvE8GzSAGQgL0TqQtRuVLxTwGjJ7uCFf0PXidSU53RwUbVZ7TTZTtdk2cyBYWTrTJz1knMgtFeVNPwhmTks34eUNNDYye5bGb5z4uOghDvpjtMWouiLpE5v27xRdk3uSKaEnltFHo88bRL1H6GNlGtGlrA3W0nMh6I525eaUx7IQMJjtoM%2FZAC1zCcHhE8eW0hbPtBG%2FhtG%2BWzTDXkvzcos%2F0mlLCqrPH7Fj4ueeF9AE7VMm42ENdC2UyYoopqQ1pThVRkR%2FwxkGPiet7PpoCilFjptFy52IqZoLJoTUMNuuvr4GOqUBPN%2F0%2B4pBG%2BU5vPxmg39FYccoPAxLp9GBAdfEj84ECTL8q3LqATMLRs3FfNTeDOMW4wgY2wsjedLirTkYYjpXxubMC50qaS2wDiVK125B3BJfnBMzCMt2F26532lU%2FCibAmNCJBhmjczI1sHnnhxZajIZc%2Fad4p8GqZRe1fr9K4luFjD%2BRTGF3zgDyvYEOUs%2BMKciD395h1iKHbrSvfgg%2FSxaMe0H&X-Amz-Signature=f256141fa61c98fd886be784f6744844e627c1731a3e9fd72b9ac003a2e761e0&X-Amz-SignedHeaders=host&x-id=GetObject)
