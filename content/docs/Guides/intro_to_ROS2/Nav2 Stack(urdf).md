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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EM4KSY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7A8EG1WK8zanjzJwSioM7cETuU6HB%2F4N5r9R2GWBayAiAwRKpoiikGlMux%2BXLmmZcoKODHiUeDZ0Em0QbKJm1C2Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa3yA6YNg%2B5g9zWSNKtwDSb22qJGjrgT1ELObfIFUEhCc%2FFfBRm5lOgHo1%2FzFE1Xrxe1LKCoA0L7k5grJndhlCNNmhkLdoBtU0gFUkPz09BNokFsju4Vpalhg%2FxiH%2BaATHxIXhX5M0ZFHV7t0ag0ZN89VY7oxvbEL2w0xDKb6umoKfcdbASImK%2FyTz6treMR9jukved%2Fdpbj%2Bqvk3C6JnZKyINfkIy1PPlbNpmrVnOBBLsBFIT57fLkMMZ6V4A6FmfcrqKB8gwee15a2oIvbQHAxyln61y1%2FXZIcxzjgvLerxJ2P%2FReujZDzSBMsD18xtlStcfqM7oQyL1yGoILGRZnpVXperhx8LySEIYw5EFpQ5h4YQ98Tdh3PTiEhjdzXlRQfLceYepahtcxpwstgjnwbdD9ErZuxzx6qP5gGb4wSzrfDghmydWpAo3xEWh3HhKIrh4Zi2XJ1PVFt91CKzXOR%2FlxJPwXbx9yJ6VV1RZ6%2BQaGpqGCFoAMglf3HIz4bG%2FmzDOeQ31bNyDYlzGg4xJUeHVKGRCSyxIc2dTPHTXoid7rY4R%2BUCRXBaZmYaEItw79DmB1GDHoHi3UzfIkqclLxyY2FhU6zUv2SWlU04DpvdNCyrFwGbH8WCLGrTsg%2B7Y%2FgY1qP7HXTIERYwg9%2FCwgY6pgGmpE9VLfgJwyTa4MGCLPLbXK6TE3qwpJXMXieFqyjQz3zqsuOoMkIs6BJZmR%2BHRPLBXvj9sqN8xwgd7Tt1hkopfts6RWTzJS4Km3UcwWMKuJiCnahxr3BFo081mq8ZTP28EAXZMzduEnPChsiyqmyqmLRhnRLGUW027gmepZ0UHc7JbLnuEPuiPJ7c4FBgOGg7ftRaS62Fm6KdCC2r3I9H4D1tcVPb&X-Amz-Signature=7a7e3a5b28b700b0a000e60a0241deb1126ab30ca6a469bd5ae06b416051567d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EM4KSY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7A8EG1WK8zanjzJwSioM7cETuU6HB%2F4N5r9R2GWBayAiAwRKpoiikGlMux%2BXLmmZcoKODHiUeDZ0Em0QbKJm1C2Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa3yA6YNg%2B5g9zWSNKtwDSb22qJGjrgT1ELObfIFUEhCc%2FFfBRm5lOgHo1%2FzFE1Xrxe1LKCoA0L7k5grJndhlCNNmhkLdoBtU0gFUkPz09BNokFsju4Vpalhg%2FxiH%2BaATHxIXhX5M0ZFHV7t0ag0ZN89VY7oxvbEL2w0xDKb6umoKfcdbASImK%2FyTz6treMR9jukved%2Fdpbj%2Bqvk3C6JnZKyINfkIy1PPlbNpmrVnOBBLsBFIT57fLkMMZ6V4A6FmfcrqKB8gwee15a2oIvbQHAxyln61y1%2FXZIcxzjgvLerxJ2P%2FReujZDzSBMsD18xtlStcfqM7oQyL1yGoILGRZnpVXperhx8LySEIYw5EFpQ5h4YQ98Tdh3PTiEhjdzXlRQfLceYepahtcxpwstgjnwbdD9ErZuxzx6qP5gGb4wSzrfDghmydWpAo3xEWh3HhKIrh4Zi2XJ1PVFt91CKzXOR%2FlxJPwXbx9yJ6VV1RZ6%2BQaGpqGCFoAMglf3HIz4bG%2FmzDOeQ31bNyDYlzGg4xJUeHVKGRCSyxIc2dTPHTXoid7rY4R%2BUCRXBaZmYaEItw79DmB1GDHoHi3UzfIkqclLxyY2FhU6zUv2SWlU04DpvdNCyrFwGbH8WCLGrTsg%2B7Y%2FgY1qP7HXTIERYwg9%2FCwgY6pgGmpE9VLfgJwyTa4MGCLPLbXK6TE3qwpJXMXieFqyjQz3zqsuOoMkIs6BJZmR%2BHRPLBXvj9sqN8xwgd7Tt1hkopfts6RWTzJS4Km3UcwWMKuJiCnahxr3BFo081mq8ZTP28EAXZMzduEnPChsiyqmyqmLRhnRLGUW027gmepZ0UHc7JbLnuEPuiPJ7c4FBgOGg7ftRaS62Fm6KdCC2r3I9H4D1tcVPb&X-Amz-Signature=372067088ae2abdae1955a2cbfca669b38079446119316a4c5c14e4c91e0a624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EM4KSY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7A8EG1WK8zanjzJwSioM7cETuU6HB%2F4N5r9R2GWBayAiAwRKpoiikGlMux%2BXLmmZcoKODHiUeDZ0Em0QbKJm1C2Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa3yA6YNg%2B5g9zWSNKtwDSb22qJGjrgT1ELObfIFUEhCc%2FFfBRm5lOgHo1%2FzFE1Xrxe1LKCoA0L7k5grJndhlCNNmhkLdoBtU0gFUkPz09BNokFsju4Vpalhg%2FxiH%2BaATHxIXhX5M0ZFHV7t0ag0ZN89VY7oxvbEL2w0xDKb6umoKfcdbASImK%2FyTz6treMR9jukved%2Fdpbj%2Bqvk3C6JnZKyINfkIy1PPlbNpmrVnOBBLsBFIT57fLkMMZ6V4A6FmfcrqKB8gwee15a2oIvbQHAxyln61y1%2FXZIcxzjgvLerxJ2P%2FReujZDzSBMsD18xtlStcfqM7oQyL1yGoILGRZnpVXperhx8LySEIYw5EFpQ5h4YQ98Tdh3PTiEhjdzXlRQfLceYepahtcxpwstgjnwbdD9ErZuxzx6qP5gGb4wSzrfDghmydWpAo3xEWh3HhKIrh4Zi2XJ1PVFt91CKzXOR%2FlxJPwXbx9yJ6VV1RZ6%2BQaGpqGCFoAMglf3HIz4bG%2FmzDOeQ31bNyDYlzGg4xJUeHVKGRCSyxIc2dTPHTXoid7rY4R%2BUCRXBaZmYaEItw79DmB1GDHoHi3UzfIkqclLxyY2FhU6zUv2SWlU04DpvdNCyrFwGbH8WCLGrTsg%2B7Y%2FgY1qP7HXTIERYwg9%2FCwgY6pgGmpE9VLfgJwyTa4MGCLPLbXK6TE3qwpJXMXieFqyjQz3zqsuOoMkIs6BJZmR%2BHRPLBXvj9sqN8xwgd7Tt1hkopfts6RWTzJS4Km3UcwWMKuJiCnahxr3BFo081mq8ZTP28EAXZMzduEnPChsiyqmyqmLRhnRLGUW027gmepZ0UHc7JbLnuEPuiPJ7c4FBgOGg7ftRaS62Fm6KdCC2r3I9H4D1tcVPb&X-Amz-Signature=f894f93833bac7c92bde388144b875ec07d88260e9f1f8ac23bf4cc19a415682&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EM4KSY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7A8EG1WK8zanjzJwSioM7cETuU6HB%2F4N5r9R2GWBayAiAwRKpoiikGlMux%2BXLmmZcoKODHiUeDZ0Em0QbKJm1C2Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa3yA6YNg%2B5g9zWSNKtwDSb22qJGjrgT1ELObfIFUEhCc%2FFfBRm5lOgHo1%2FzFE1Xrxe1LKCoA0L7k5grJndhlCNNmhkLdoBtU0gFUkPz09BNokFsju4Vpalhg%2FxiH%2BaATHxIXhX5M0ZFHV7t0ag0ZN89VY7oxvbEL2w0xDKb6umoKfcdbASImK%2FyTz6treMR9jukved%2Fdpbj%2Bqvk3C6JnZKyINfkIy1PPlbNpmrVnOBBLsBFIT57fLkMMZ6V4A6FmfcrqKB8gwee15a2oIvbQHAxyln61y1%2FXZIcxzjgvLerxJ2P%2FReujZDzSBMsD18xtlStcfqM7oQyL1yGoILGRZnpVXperhx8LySEIYw5EFpQ5h4YQ98Tdh3PTiEhjdzXlRQfLceYepahtcxpwstgjnwbdD9ErZuxzx6qP5gGb4wSzrfDghmydWpAo3xEWh3HhKIrh4Zi2XJ1PVFt91CKzXOR%2FlxJPwXbx9yJ6VV1RZ6%2BQaGpqGCFoAMglf3HIz4bG%2FmzDOeQ31bNyDYlzGg4xJUeHVKGRCSyxIc2dTPHTXoid7rY4R%2BUCRXBaZmYaEItw79DmB1GDHoHi3UzfIkqclLxyY2FhU6zUv2SWlU04DpvdNCyrFwGbH8WCLGrTsg%2B7Y%2FgY1qP7HXTIERYwg9%2FCwgY6pgGmpE9VLfgJwyTa4MGCLPLbXK6TE3qwpJXMXieFqyjQz3zqsuOoMkIs6BJZmR%2BHRPLBXvj9sqN8xwgd7Tt1hkopfts6RWTzJS4Km3UcwWMKuJiCnahxr3BFo081mq8ZTP28EAXZMzduEnPChsiyqmyqmLRhnRLGUW027gmepZ0UHc7JbLnuEPuiPJ7c4FBgOGg7ftRaS62Fm6KdCC2r3I9H4D1tcVPb&X-Amz-Signature=f845890fa30f19c9c3998851c495a991f20eb6176ba2a7d6b98ea518e9694019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EM4KSY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7A8EG1WK8zanjzJwSioM7cETuU6HB%2F4N5r9R2GWBayAiAwRKpoiikGlMux%2BXLmmZcoKODHiUeDZ0Em0QbKJm1C2Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa3yA6YNg%2B5g9zWSNKtwDSb22qJGjrgT1ELObfIFUEhCc%2FFfBRm5lOgHo1%2FzFE1Xrxe1LKCoA0L7k5grJndhlCNNmhkLdoBtU0gFUkPz09BNokFsju4Vpalhg%2FxiH%2BaATHxIXhX5M0ZFHV7t0ag0ZN89VY7oxvbEL2w0xDKb6umoKfcdbASImK%2FyTz6treMR9jukved%2Fdpbj%2Bqvk3C6JnZKyINfkIy1PPlbNpmrVnOBBLsBFIT57fLkMMZ6V4A6FmfcrqKB8gwee15a2oIvbQHAxyln61y1%2FXZIcxzjgvLerxJ2P%2FReujZDzSBMsD18xtlStcfqM7oQyL1yGoILGRZnpVXperhx8LySEIYw5EFpQ5h4YQ98Tdh3PTiEhjdzXlRQfLceYepahtcxpwstgjnwbdD9ErZuxzx6qP5gGb4wSzrfDghmydWpAo3xEWh3HhKIrh4Zi2XJ1PVFt91CKzXOR%2FlxJPwXbx9yJ6VV1RZ6%2BQaGpqGCFoAMglf3HIz4bG%2FmzDOeQ31bNyDYlzGg4xJUeHVKGRCSyxIc2dTPHTXoid7rY4R%2BUCRXBaZmYaEItw79DmB1GDHoHi3UzfIkqclLxyY2FhU6zUv2SWlU04DpvdNCyrFwGbH8WCLGrTsg%2B7Y%2FgY1qP7HXTIERYwg9%2FCwgY6pgGmpE9VLfgJwyTa4MGCLPLbXK6TE3qwpJXMXieFqyjQz3zqsuOoMkIs6BJZmR%2BHRPLBXvj9sqN8xwgd7Tt1hkopfts6RWTzJS4Km3UcwWMKuJiCnahxr3BFo081mq8ZTP28EAXZMzduEnPChsiyqmyqmLRhnRLGUW027gmepZ0UHc7JbLnuEPuiPJ7c4FBgOGg7ftRaS62Fm6KdCC2r3I9H4D1tcVPb&X-Amz-Signature=02ada33277031fadc29b53d302aff48c93b9ef47fa2ea71dba354a2cf81bc66d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5EM4KSY%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T004255Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID7A8EG1WK8zanjzJwSioM7cETuU6HB%2F4N5r9R2GWBayAiAwRKpoiikGlMux%2BXLmmZcoKODHiUeDZ0Em0QbKJm1C2Cr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMa3yA6YNg%2B5g9zWSNKtwDSb22qJGjrgT1ELObfIFUEhCc%2FFfBRm5lOgHo1%2FzFE1Xrxe1LKCoA0L7k5grJndhlCNNmhkLdoBtU0gFUkPz09BNokFsju4Vpalhg%2FxiH%2BaATHxIXhX5M0ZFHV7t0ag0ZN89VY7oxvbEL2w0xDKb6umoKfcdbASImK%2FyTz6treMR9jukved%2Fdpbj%2Bqvk3C6JnZKyINfkIy1PPlbNpmrVnOBBLsBFIT57fLkMMZ6V4A6FmfcrqKB8gwee15a2oIvbQHAxyln61y1%2FXZIcxzjgvLerxJ2P%2FReujZDzSBMsD18xtlStcfqM7oQyL1yGoILGRZnpVXperhx8LySEIYw5EFpQ5h4YQ98Tdh3PTiEhjdzXlRQfLceYepahtcxpwstgjnwbdD9ErZuxzx6qP5gGb4wSzrfDghmydWpAo3xEWh3HhKIrh4Zi2XJ1PVFt91CKzXOR%2FlxJPwXbx9yJ6VV1RZ6%2BQaGpqGCFoAMglf3HIz4bG%2FmzDOeQ31bNyDYlzGg4xJUeHVKGRCSyxIc2dTPHTXoid7rY4R%2BUCRXBaZmYaEItw79DmB1GDHoHi3UzfIkqclLxyY2FhU6zUv2SWlU04DpvdNCyrFwGbH8WCLGrTsg%2B7Y%2FgY1qP7HXTIERYwg9%2FCwgY6pgGmpE9VLfgJwyTa4MGCLPLbXK6TE3qwpJXMXieFqyjQz3zqsuOoMkIs6BJZmR%2BHRPLBXvj9sqN8xwgd7Tt1hkopfts6RWTzJS4Km3UcwWMKuJiCnahxr3BFo081mq8ZTP28EAXZMzduEnPChsiyqmyqmLRhnRLGUW027gmepZ0UHc7JbLnuEPuiPJ7c4FBgOGg7ftRaS62Fm6KdCC2r3I9H4D1tcVPb&X-Amz-Signature=de15518ba275801fc9407c092214e985a91aba3aa9fb5df8d18ecd7930c0c73b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
