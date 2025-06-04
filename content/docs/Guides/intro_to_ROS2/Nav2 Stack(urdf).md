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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN26MNB4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC0vOf923cThh7K8IgDwwucVDlqL7s%2FsDEJhbPryid%2F3AiBk5ppTz5G9zhAGRfPJ7eYNTu72U8Sa%2FLIOH1VSVv%2F7Uyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyJWA%2BMHzFerCSg8jKtwDv%2FL2UMd5QhCTrhlrnkYQWL6sKj%2BrahSHmhqlyCCWYwn8VCv%2BaaBSmvqEFVnOE58iJHWc5FIQ31yUznB1QnGQ1uUdCYgI0kPwKhakubVstUigMt1lsu7UvdYmqIFQTOluod4ysCgfltf6zx%2Bemb8O0oVAHw0viJuL%2Fngl0c%2B0RQbKzulPwKdnO9xdD3gWpa9t0Up3bj4m%2Bf3V%2FZPCbixD%2Bk%2BH7k2zSCFvWB%2BVTwqXH%2FNyOwCSl4zW9QQLjkK%2FPP0h9E1qqCwCB7uLGx3E0H7IYt9%2BnM7foSQutbaZZjN3Il9oQVU5LKFCvS9qm5RGJIyfX5RFNfQf0WPq3tj0Nn5wS%2Fiy53avydZUgKIc3N6uwSFBSqRGJj0KUqmOqKThSNMDOJcYw9hH13erDkHRFvRzUzHQQc%2BUGHctm46Dq69xjJMOMcYsL9LqopkOoZxeQ8lf1Hjlk8xpbuFBsTI4LqG%2BmFjLmH8UrWSnTcnRIX3nAFvaLvOJeukk10EnrE8KWcnCBTeWDDcXXDT%2B13TSjzplzTxnbSENOqAXuLEUijfaSKrmy65zVjheJCP9S54l4C8a7JWCeZyBcUfLKzKRi2EJYZZw6Nlo%2B0piaa98Vt8hATAkE8TJhDj96fIGDbUwvZ%2BAwgY6pgH5Rlt4QYpKGCQeFsjeEE8WSElSZem0Z0k2oDmkZZwSHz9W1Gbyr97B0tuaMLhQdjOC8b175OTSoo0y2XBJY4%2BKuuBu11Fnu4XellAeCf%2F35kwkoxpuRB7YGvZchPtscVCBKd9BU6QKNFpIaaq4Pvm%2BFhMErd0U%2BDYfEHrZhHK2tc3GZJXHsfIsaVSaKI6%2FE%2FEdxWK7VX8UwAJYWaobcXTfh073KISB&X-Amz-Signature=ae8371c2562a04e041b2d93198bad9d42aeeb5d48b4c4262b0bda8dfc8a13f5e&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN26MNB4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC0vOf923cThh7K8IgDwwucVDlqL7s%2FsDEJhbPryid%2F3AiBk5ppTz5G9zhAGRfPJ7eYNTu72U8Sa%2FLIOH1VSVv%2F7Uyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyJWA%2BMHzFerCSg8jKtwDv%2FL2UMd5QhCTrhlrnkYQWL6sKj%2BrahSHmhqlyCCWYwn8VCv%2BaaBSmvqEFVnOE58iJHWc5FIQ31yUznB1QnGQ1uUdCYgI0kPwKhakubVstUigMt1lsu7UvdYmqIFQTOluod4ysCgfltf6zx%2Bemb8O0oVAHw0viJuL%2Fngl0c%2B0RQbKzulPwKdnO9xdD3gWpa9t0Up3bj4m%2Bf3V%2FZPCbixD%2Bk%2BH7k2zSCFvWB%2BVTwqXH%2FNyOwCSl4zW9QQLjkK%2FPP0h9E1qqCwCB7uLGx3E0H7IYt9%2BnM7foSQutbaZZjN3Il9oQVU5LKFCvS9qm5RGJIyfX5RFNfQf0WPq3tj0Nn5wS%2Fiy53avydZUgKIc3N6uwSFBSqRGJj0KUqmOqKThSNMDOJcYw9hH13erDkHRFvRzUzHQQc%2BUGHctm46Dq69xjJMOMcYsL9LqopkOoZxeQ8lf1Hjlk8xpbuFBsTI4LqG%2BmFjLmH8UrWSnTcnRIX3nAFvaLvOJeukk10EnrE8KWcnCBTeWDDcXXDT%2B13TSjzplzTxnbSENOqAXuLEUijfaSKrmy65zVjheJCP9S54l4C8a7JWCeZyBcUfLKzKRi2EJYZZw6Nlo%2B0piaa98Vt8hATAkE8TJhDj96fIGDbUwvZ%2BAwgY6pgH5Rlt4QYpKGCQeFsjeEE8WSElSZem0Z0k2oDmkZZwSHz9W1Gbyr97B0tuaMLhQdjOC8b175OTSoo0y2XBJY4%2BKuuBu11Fnu4XellAeCf%2F35kwkoxpuRB7YGvZchPtscVCBKd9BU6QKNFpIaaq4Pvm%2BFhMErd0U%2BDYfEHrZhHK2tc3GZJXHsfIsaVSaKI6%2FE%2FEdxWK7VX8UwAJYWaobcXTfh073KISB&X-Amz-Signature=391b23cec7eec63b83c3fa7d27f2f58967df6936657dc3d54373366828eefaf6&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN26MNB4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC0vOf923cThh7K8IgDwwucVDlqL7s%2FsDEJhbPryid%2F3AiBk5ppTz5G9zhAGRfPJ7eYNTu72U8Sa%2FLIOH1VSVv%2F7Uyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyJWA%2BMHzFerCSg8jKtwDv%2FL2UMd5QhCTrhlrnkYQWL6sKj%2BrahSHmhqlyCCWYwn8VCv%2BaaBSmvqEFVnOE58iJHWc5FIQ31yUznB1QnGQ1uUdCYgI0kPwKhakubVstUigMt1lsu7UvdYmqIFQTOluod4ysCgfltf6zx%2Bemb8O0oVAHw0viJuL%2Fngl0c%2B0RQbKzulPwKdnO9xdD3gWpa9t0Up3bj4m%2Bf3V%2FZPCbixD%2Bk%2BH7k2zSCFvWB%2BVTwqXH%2FNyOwCSl4zW9QQLjkK%2FPP0h9E1qqCwCB7uLGx3E0H7IYt9%2BnM7foSQutbaZZjN3Il9oQVU5LKFCvS9qm5RGJIyfX5RFNfQf0WPq3tj0Nn5wS%2Fiy53avydZUgKIc3N6uwSFBSqRGJj0KUqmOqKThSNMDOJcYw9hH13erDkHRFvRzUzHQQc%2BUGHctm46Dq69xjJMOMcYsL9LqopkOoZxeQ8lf1Hjlk8xpbuFBsTI4LqG%2BmFjLmH8UrWSnTcnRIX3nAFvaLvOJeukk10EnrE8KWcnCBTeWDDcXXDT%2B13TSjzplzTxnbSENOqAXuLEUijfaSKrmy65zVjheJCP9S54l4C8a7JWCeZyBcUfLKzKRi2EJYZZw6Nlo%2B0piaa98Vt8hATAkE8TJhDj96fIGDbUwvZ%2BAwgY6pgH5Rlt4QYpKGCQeFsjeEE8WSElSZem0Z0k2oDmkZZwSHz9W1Gbyr97B0tuaMLhQdjOC8b175OTSoo0y2XBJY4%2BKuuBu11Fnu4XellAeCf%2F35kwkoxpuRB7YGvZchPtscVCBKd9BU6QKNFpIaaq4Pvm%2BFhMErd0U%2BDYfEHrZhHK2tc3GZJXHsfIsaVSaKI6%2FE%2FEdxWK7VX8UwAJYWaobcXTfh073KISB&X-Amz-Signature=4a6863a37581c7b4f2a81482157398ebb7b24fdeb903b0f100e62147f24e6c60&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN26MNB4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC0vOf923cThh7K8IgDwwucVDlqL7s%2FsDEJhbPryid%2F3AiBk5ppTz5G9zhAGRfPJ7eYNTu72U8Sa%2FLIOH1VSVv%2F7Uyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyJWA%2BMHzFerCSg8jKtwDv%2FL2UMd5QhCTrhlrnkYQWL6sKj%2BrahSHmhqlyCCWYwn8VCv%2BaaBSmvqEFVnOE58iJHWc5FIQ31yUznB1QnGQ1uUdCYgI0kPwKhakubVstUigMt1lsu7UvdYmqIFQTOluod4ysCgfltf6zx%2Bemb8O0oVAHw0viJuL%2Fngl0c%2B0RQbKzulPwKdnO9xdD3gWpa9t0Up3bj4m%2Bf3V%2FZPCbixD%2Bk%2BH7k2zSCFvWB%2BVTwqXH%2FNyOwCSl4zW9QQLjkK%2FPP0h9E1qqCwCB7uLGx3E0H7IYt9%2BnM7foSQutbaZZjN3Il9oQVU5LKFCvS9qm5RGJIyfX5RFNfQf0WPq3tj0Nn5wS%2Fiy53avydZUgKIc3N6uwSFBSqRGJj0KUqmOqKThSNMDOJcYw9hH13erDkHRFvRzUzHQQc%2BUGHctm46Dq69xjJMOMcYsL9LqopkOoZxeQ8lf1Hjlk8xpbuFBsTI4LqG%2BmFjLmH8UrWSnTcnRIX3nAFvaLvOJeukk10EnrE8KWcnCBTeWDDcXXDT%2B13TSjzplzTxnbSENOqAXuLEUijfaSKrmy65zVjheJCP9S54l4C8a7JWCeZyBcUfLKzKRi2EJYZZw6Nlo%2B0piaa98Vt8hATAkE8TJhDj96fIGDbUwvZ%2BAwgY6pgH5Rlt4QYpKGCQeFsjeEE8WSElSZem0Z0k2oDmkZZwSHz9W1Gbyr97B0tuaMLhQdjOC8b175OTSoo0y2XBJY4%2BKuuBu11Fnu4XellAeCf%2F35kwkoxpuRB7YGvZchPtscVCBKd9BU6QKNFpIaaq4Pvm%2BFhMErd0U%2BDYfEHrZhHK2tc3GZJXHsfIsaVSaKI6%2FE%2FEdxWK7VX8UwAJYWaobcXTfh073KISB&X-Amz-Signature=81d4178ec7a5f134f10234bf6886ffc598c4c81281c87956cd45d208833b5ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN26MNB4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC0vOf923cThh7K8IgDwwucVDlqL7s%2FsDEJhbPryid%2F3AiBk5ppTz5G9zhAGRfPJ7eYNTu72U8Sa%2FLIOH1VSVv%2F7Uyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyJWA%2BMHzFerCSg8jKtwDv%2FL2UMd5QhCTrhlrnkYQWL6sKj%2BrahSHmhqlyCCWYwn8VCv%2BaaBSmvqEFVnOE58iJHWc5FIQ31yUznB1QnGQ1uUdCYgI0kPwKhakubVstUigMt1lsu7UvdYmqIFQTOluod4ysCgfltf6zx%2Bemb8O0oVAHw0viJuL%2Fngl0c%2B0RQbKzulPwKdnO9xdD3gWpa9t0Up3bj4m%2Bf3V%2FZPCbixD%2Bk%2BH7k2zSCFvWB%2BVTwqXH%2FNyOwCSl4zW9QQLjkK%2FPP0h9E1qqCwCB7uLGx3E0H7IYt9%2BnM7foSQutbaZZjN3Il9oQVU5LKFCvS9qm5RGJIyfX5RFNfQf0WPq3tj0Nn5wS%2Fiy53avydZUgKIc3N6uwSFBSqRGJj0KUqmOqKThSNMDOJcYw9hH13erDkHRFvRzUzHQQc%2BUGHctm46Dq69xjJMOMcYsL9LqopkOoZxeQ8lf1Hjlk8xpbuFBsTI4LqG%2BmFjLmH8UrWSnTcnRIX3nAFvaLvOJeukk10EnrE8KWcnCBTeWDDcXXDT%2B13TSjzplzTxnbSENOqAXuLEUijfaSKrmy65zVjheJCP9S54l4C8a7JWCeZyBcUfLKzKRi2EJYZZw6Nlo%2B0piaa98Vt8hATAkE8TJhDj96fIGDbUwvZ%2BAwgY6pgH5Rlt4QYpKGCQeFsjeEE8WSElSZem0Z0k2oDmkZZwSHz9W1Gbyr97B0tuaMLhQdjOC8b175OTSoo0y2XBJY4%2BKuuBu11Fnu4XellAeCf%2F35kwkoxpuRB7YGvZchPtscVCBKd9BU6QKNFpIaaq4Pvm%2BFhMErd0U%2BDYfEHrZhHK2tc3GZJXHsfIsaVSaKI6%2FE%2FEdxWK7VX8UwAJYWaobcXTfh073KISB&X-Amz-Signature=02d3bf43795b79442e657b73f09fbf9268e06927b2b5f56663cd7d9d6039bb56&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YN26MNB4%2F20250604%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250604T100947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJGMEQCIC0vOf923cThh7K8IgDwwucVDlqL7s%2FsDEJhbPryid%2F3AiBk5ppTz5G9zhAGRfPJ7eYNTu72U8Sa%2FLIOH1VSVv%2F7Uyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMyJWA%2BMHzFerCSg8jKtwDv%2FL2UMd5QhCTrhlrnkYQWL6sKj%2BrahSHmhqlyCCWYwn8VCv%2BaaBSmvqEFVnOE58iJHWc5FIQ31yUznB1QnGQ1uUdCYgI0kPwKhakubVstUigMt1lsu7UvdYmqIFQTOluod4ysCgfltf6zx%2Bemb8O0oVAHw0viJuL%2Fngl0c%2B0RQbKzulPwKdnO9xdD3gWpa9t0Up3bj4m%2Bf3V%2FZPCbixD%2Bk%2BH7k2zSCFvWB%2BVTwqXH%2FNyOwCSl4zW9QQLjkK%2FPP0h9E1qqCwCB7uLGx3E0H7IYt9%2BnM7foSQutbaZZjN3Il9oQVU5LKFCvS9qm5RGJIyfX5RFNfQf0WPq3tj0Nn5wS%2Fiy53avydZUgKIc3N6uwSFBSqRGJj0KUqmOqKThSNMDOJcYw9hH13erDkHRFvRzUzHQQc%2BUGHctm46Dq69xjJMOMcYsL9LqopkOoZxeQ8lf1Hjlk8xpbuFBsTI4LqG%2BmFjLmH8UrWSnTcnRIX3nAFvaLvOJeukk10EnrE8KWcnCBTeWDDcXXDT%2B13TSjzplzTxnbSENOqAXuLEUijfaSKrmy65zVjheJCP9S54l4C8a7JWCeZyBcUfLKzKRi2EJYZZw6Nlo%2B0piaa98Vt8hATAkE8TJhDj96fIGDbUwvZ%2BAwgY6pgH5Rlt4QYpKGCQeFsjeEE8WSElSZem0Z0k2oDmkZZwSHz9W1Gbyr97B0tuaMLhQdjOC8b175OTSoo0y2XBJY4%2BKuuBu11Fnu4XellAeCf%2F35kwkoxpuRB7YGvZchPtscVCBKd9BU6QKNFpIaaq4Pvm%2BFhMErd0U%2BDYfEHrZhHK2tc3GZJXHsfIsaVSaKI6%2FE%2FEdxWK7VX8UwAJYWaobcXTfh073KISB&X-Amz-Signature=845f3ed4f596d5c12cd28ad0e591aa2bcdd3d75436eb9f73e33bbc65bf4c3af4&X-Amz-SignedHeaders=host&x-id=GetObject)
