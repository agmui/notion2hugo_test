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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL6SA4I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5bMu5scWISzc4zjw%2Bir5E6RFiuBKOTKXv6M9KFE40AIgPiu3SCntV%2FE3plHx7xfHg7VPI46qQDE%2FchRrCv%2FlYOgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC1hl7O8XWiqF4MqayrcA%2Bz4461k1klBFbKpmJ9KTnyOUCgmrLS4POX8fb%2FcDYAVf3ehkftbIB8cQOmVFuiwduQeanHQQ%2BE1R7m0FSPETT%2BkJE%2BQmIBkCjJ6a05Axl16uwUr%2BoZhsBwcDfe4btg6R0z%2ByYJ3up5HXcXawmWGlYnYCaxg4TmBvUn%2FAIzZcK9pxsYWal8oWuV%2FuDYNWmESbiU6fpF6sHAspt8twm7w%2BkfXkWFqogYNqrT8Y4QrlzDGvkcPuaz%2FQ4iFrLlxat8qId8LAy%2BSZiXtlpLVOvVCJqFhelMjeJ744J1IryE4pVcW%2Blwdq8%2BYP3QmSeV7fFq1IAbuGdmYuiiRBDlyJQrjcjtJhs6P0g99Cyh4ltza8oSfREkz8V9U3OHyGFdyE1wdkiw96p40aCmQfybNCxgYNQm8LRKIYITCSDgFY%2B%2Bgr%2BaxqZJYYz%2Brs%2BoLwjgi%2Bal3Ri%2BdQoewd6YYGf2mw8uTcVhonRJ0qjXDA%2BVZojJG9dIPe7hx2HVIDjZ7AiFjZ0PgYJFa8xxLrlwv8WimVgaxALcgb5TVXAeU8BFnV61ai%2FO7VfIvy9c0oWU8eiv5Hyj5c5o9Lfe0pIGOxpAYjV2GSHDruA8y3aYJh37L8eXvhoSrH%2FDolNmpIc6ZsrEVMPq47sAGOqUBIMbRqwdBFfQ4Wvd9wkwFcXLNz8auzDJPKhrkGYoiwIh%2BUWyUxVVNkO%2BhqCt2cuJsLGc%2F1L0S%2B0YkCKzc4A3kFZa8RKJIPJv54oPP18Nr1fCULKrkjs9GDM8F4CPTYj1zKEpSBe2w%2BnZVyDb1mEBY1deycymeAerlxHkNEUJaO5HDw8kxcgVjMXjlhbffDtPm6XpRpd5FQHLLRB%2Bg3umkH9PWVMGY&X-Amz-Signature=58cf6a963cb49ef52892cf7e3fc9124c0931c20c8f811bbc738e6dba946e62e5&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL6SA4I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5bMu5scWISzc4zjw%2Bir5E6RFiuBKOTKXv6M9KFE40AIgPiu3SCntV%2FE3plHx7xfHg7VPI46qQDE%2FchRrCv%2FlYOgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC1hl7O8XWiqF4MqayrcA%2Bz4461k1klBFbKpmJ9KTnyOUCgmrLS4POX8fb%2FcDYAVf3ehkftbIB8cQOmVFuiwduQeanHQQ%2BE1R7m0FSPETT%2BkJE%2BQmIBkCjJ6a05Axl16uwUr%2BoZhsBwcDfe4btg6R0z%2ByYJ3up5HXcXawmWGlYnYCaxg4TmBvUn%2FAIzZcK9pxsYWal8oWuV%2FuDYNWmESbiU6fpF6sHAspt8twm7w%2BkfXkWFqogYNqrT8Y4QrlzDGvkcPuaz%2FQ4iFrLlxat8qId8LAy%2BSZiXtlpLVOvVCJqFhelMjeJ744J1IryE4pVcW%2Blwdq8%2BYP3QmSeV7fFq1IAbuGdmYuiiRBDlyJQrjcjtJhs6P0g99Cyh4ltza8oSfREkz8V9U3OHyGFdyE1wdkiw96p40aCmQfybNCxgYNQm8LRKIYITCSDgFY%2B%2Bgr%2BaxqZJYYz%2Brs%2BoLwjgi%2Bal3Ri%2BdQoewd6YYGf2mw8uTcVhonRJ0qjXDA%2BVZojJG9dIPe7hx2HVIDjZ7AiFjZ0PgYJFa8xxLrlwv8WimVgaxALcgb5TVXAeU8BFnV61ai%2FO7VfIvy9c0oWU8eiv5Hyj5c5o9Lfe0pIGOxpAYjV2GSHDruA8y3aYJh37L8eXvhoSrH%2FDolNmpIc6ZsrEVMPq47sAGOqUBIMbRqwdBFfQ4Wvd9wkwFcXLNz8auzDJPKhrkGYoiwIh%2BUWyUxVVNkO%2BhqCt2cuJsLGc%2F1L0S%2B0YkCKzc4A3kFZa8RKJIPJv54oPP18Nr1fCULKrkjs9GDM8F4CPTYj1zKEpSBe2w%2BnZVyDb1mEBY1deycymeAerlxHkNEUJaO5HDw8kxcgVjMXjlhbffDtPm6XpRpd5FQHLLRB%2Bg3umkH9PWVMGY&X-Amz-Signature=280e409f671bf6b25b00983336591f73a25779d2da9d7b2a8e37b19a23e0e979&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL6SA4I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5bMu5scWISzc4zjw%2Bir5E6RFiuBKOTKXv6M9KFE40AIgPiu3SCntV%2FE3plHx7xfHg7VPI46qQDE%2FchRrCv%2FlYOgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC1hl7O8XWiqF4MqayrcA%2Bz4461k1klBFbKpmJ9KTnyOUCgmrLS4POX8fb%2FcDYAVf3ehkftbIB8cQOmVFuiwduQeanHQQ%2BE1R7m0FSPETT%2BkJE%2BQmIBkCjJ6a05Axl16uwUr%2BoZhsBwcDfe4btg6R0z%2ByYJ3up5HXcXawmWGlYnYCaxg4TmBvUn%2FAIzZcK9pxsYWal8oWuV%2FuDYNWmESbiU6fpF6sHAspt8twm7w%2BkfXkWFqogYNqrT8Y4QrlzDGvkcPuaz%2FQ4iFrLlxat8qId8LAy%2BSZiXtlpLVOvVCJqFhelMjeJ744J1IryE4pVcW%2Blwdq8%2BYP3QmSeV7fFq1IAbuGdmYuiiRBDlyJQrjcjtJhs6P0g99Cyh4ltza8oSfREkz8V9U3OHyGFdyE1wdkiw96p40aCmQfybNCxgYNQm8LRKIYITCSDgFY%2B%2Bgr%2BaxqZJYYz%2Brs%2BoLwjgi%2Bal3Ri%2BdQoewd6YYGf2mw8uTcVhonRJ0qjXDA%2BVZojJG9dIPe7hx2HVIDjZ7AiFjZ0PgYJFa8xxLrlwv8WimVgaxALcgb5TVXAeU8BFnV61ai%2FO7VfIvy9c0oWU8eiv5Hyj5c5o9Lfe0pIGOxpAYjV2GSHDruA8y3aYJh37L8eXvhoSrH%2FDolNmpIc6ZsrEVMPq47sAGOqUBIMbRqwdBFfQ4Wvd9wkwFcXLNz8auzDJPKhrkGYoiwIh%2BUWyUxVVNkO%2BhqCt2cuJsLGc%2F1L0S%2B0YkCKzc4A3kFZa8RKJIPJv54oPP18Nr1fCULKrkjs9GDM8F4CPTYj1zKEpSBe2w%2BnZVyDb1mEBY1deycymeAerlxHkNEUJaO5HDw8kxcgVjMXjlhbffDtPm6XpRpd5FQHLLRB%2Bg3umkH9PWVMGY&X-Amz-Signature=0865052b040e86baa5bd7ffd7baec5d34d118ca512c50a41d7397bca808226dc&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL6SA4I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5bMu5scWISzc4zjw%2Bir5E6RFiuBKOTKXv6M9KFE40AIgPiu3SCntV%2FE3plHx7xfHg7VPI46qQDE%2FchRrCv%2FlYOgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC1hl7O8XWiqF4MqayrcA%2Bz4461k1klBFbKpmJ9KTnyOUCgmrLS4POX8fb%2FcDYAVf3ehkftbIB8cQOmVFuiwduQeanHQQ%2BE1R7m0FSPETT%2BkJE%2BQmIBkCjJ6a05Axl16uwUr%2BoZhsBwcDfe4btg6R0z%2ByYJ3up5HXcXawmWGlYnYCaxg4TmBvUn%2FAIzZcK9pxsYWal8oWuV%2FuDYNWmESbiU6fpF6sHAspt8twm7w%2BkfXkWFqogYNqrT8Y4QrlzDGvkcPuaz%2FQ4iFrLlxat8qId8LAy%2BSZiXtlpLVOvVCJqFhelMjeJ744J1IryE4pVcW%2Blwdq8%2BYP3QmSeV7fFq1IAbuGdmYuiiRBDlyJQrjcjtJhs6P0g99Cyh4ltza8oSfREkz8V9U3OHyGFdyE1wdkiw96p40aCmQfybNCxgYNQm8LRKIYITCSDgFY%2B%2Bgr%2BaxqZJYYz%2Brs%2BoLwjgi%2Bal3Ri%2BdQoewd6YYGf2mw8uTcVhonRJ0qjXDA%2BVZojJG9dIPe7hx2HVIDjZ7AiFjZ0PgYJFa8xxLrlwv8WimVgaxALcgb5TVXAeU8BFnV61ai%2FO7VfIvy9c0oWU8eiv5Hyj5c5o9Lfe0pIGOxpAYjV2GSHDruA8y3aYJh37L8eXvhoSrH%2FDolNmpIc6ZsrEVMPq47sAGOqUBIMbRqwdBFfQ4Wvd9wkwFcXLNz8auzDJPKhrkGYoiwIh%2BUWyUxVVNkO%2BhqCt2cuJsLGc%2F1L0S%2B0YkCKzc4A3kFZa8RKJIPJv54oPP18Nr1fCULKrkjs9GDM8F4CPTYj1zKEpSBe2w%2BnZVyDb1mEBY1deycymeAerlxHkNEUJaO5HDw8kxcgVjMXjlhbffDtPm6XpRpd5FQHLLRB%2Bg3umkH9PWVMGY&X-Amz-Signature=0bfe49da6b13c2bca55200f42e0d0ae77983899ba5bb4b6586ab2d55a32eaed4&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL6SA4I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5bMu5scWISzc4zjw%2Bir5E6RFiuBKOTKXv6M9KFE40AIgPiu3SCntV%2FE3plHx7xfHg7VPI46qQDE%2FchRrCv%2FlYOgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC1hl7O8XWiqF4MqayrcA%2Bz4461k1klBFbKpmJ9KTnyOUCgmrLS4POX8fb%2FcDYAVf3ehkftbIB8cQOmVFuiwduQeanHQQ%2BE1R7m0FSPETT%2BkJE%2BQmIBkCjJ6a05Axl16uwUr%2BoZhsBwcDfe4btg6R0z%2ByYJ3up5HXcXawmWGlYnYCaxg4TmBvUn%2FAIzZcK9pxsYWal8oWuV%2FuDYNWmESbiU6fpF6sHAspt8twm7w%2BkfXkWFqogYNqrT8Y4QrlzDGvkcPuaz%2FQ4iFrLlxat8qId8LAy%2BSZiXtlpLVOvVCJqFhelMjeJ744J1IryE4pVcW%2Blwdq8%2BYP3QmSeV7fFq1IAbuGdmYuiiRBDlyJQrjcjtJhs6P0g99Cyh4ltza8oSfREkz8V9U3OHyGFdyE1wdkiw96p40aCmQfybNCxgYNQm8LRKIYITCSDgFY%2B%2Bgr%2BaxqZJYYz%2Brs%2BoLwjgi%2Bal3Ri%2BdQoewd6YYGf2mw8uTcVhonRJ0qjXDA%2BVZojJG9dIPe7hx2HVIDjZ7AiFjZ0PgYJFa8xxLrlwv8WimVgaxALcgb5TVXAeU8BFnV61ai%2FO7VfIvy9c0oWU8eiv5Hyj5c5o9Lfe0pIGOxpAYjV2GSHDruA8y3aYJh37L8eXvhoSrH%2FDolNmpIc6ZsrEVMPq47sAGOqUBIMbRqwdBFfQ4Wvd9wkwFcXLNz8auzDJPKhrkGYoiwIh%2BUWyUxVVNkO%2BhqCt2cuJsLGc%2F1L0S%2B0YkCKzc4A3kFZa8RKJIPJv54oPP18Nr1fCULKrkjs9GDM8F4CPTYj1zKEpSBe2w%2BnZVyDb1mEBY1deycymeAerlxHkNEUJaO5HDw8kxcgVjMXjlhbffDtPm6XpRpd5FQHLLRB%2Bg3umkH9PWVMGY&X-Amz-Signature=be5eab24baf6a003d510c9aa990c214240ab068d78c9ddbed7fa7cb97e5c9a36&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UDL6SA4I%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T181230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv5bMu5scWISzc4zjw%2Bir5E6RFiuBKOTKXv6M9KFE40AIgPiu3SCntV%2FE3plHx7xfHg7VPI46qQDE%2FchRrCv%2FlYOgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDC1hl7O8XWiqF4MqayrcA%2Bz4461k1klBFbKpmJ9KTnyOUCgmrLS4POX8fb%2FcDYAVf3ehkftbIB8cQOmVFuiwduQeanHQQ%2BE1R7m0FSPETT%2BkJE%2BQmIBkCjJ6a05Axl16uwUr%2BoZhsBwcDfe4btg6R0z%2ByYJ3up5HXcXawmWGlYnYCaxg4TmBvUn%2FAIzZcK9pxsYWal8oWuV%2FuDYNWmESbiU6fpF6sHAspt8twm7w%2BkfXkWFqogYNqrT8Y4QrlzDGvkcPuaz%2FQ4iFrLlxat8qId8LAy%2BSZiXtlpLVOvVCJqFhelMjeJ744J1IryE4pVcW%2Blwdq8%2BYP3QmSeV7fFq1IAbuGdmYuiiRBDlyJQrjcjtJhs6P0g99Cyh4ltza8oSfREkz8V9U3OHyGFdyE1wdkiw96p40aCmQfybNCxgYNQm8LRKIYITCSDgFY%2B%2Bgr%2BaxqZJYYz%2Brs%2BoLwjgi%2Bal3Ri%2BdQoewd6YYGf2mw8uTcVhonRJ0qjXDA%2BVZojJG9dIPe7hx2HVIDjZ7AiFjZ0PgYJFa8xxLrlwv8WimVgaxALcgb5TVXAeU8BFnV61ai%2FO7VfIvy9c0oWU8eiv5Hyj5c5o9Lfe0pIGOxpAYjV2GSHDruA8y3aYJh37L8eXvhoSrH%2FDolNmpIc6ZsrEVMPq47sAGOqUBIMbRqwdBFfQ4Wvd9wkwFcXLNz8auzDJPKhrkGYoiwIh%2BUWyUxVVNkO%2BhqCt2cuJsLGc%2F1L0S%2B0YkCKzc4A3kFZa8RKJIPJv54oPP18Nr1fCULKrkjs9GDM8F4CPTYj1zKEpSBe2w%2BnZVyDb1mEBY1deycymeAerlxHkNEUJaO5HDw8kxcgVjMXjlhbffDtPm6XpRpd5FQHLLRB%2Bg3umkH9PWVMGY&X-Amz-Signature=91d05f98fdd02e6cd0b14e5fa8223fcb784d5765b5fb848f4aa6f289cb82df13&X-Amz-SignedHeaders=host&x-id=GetObject)
