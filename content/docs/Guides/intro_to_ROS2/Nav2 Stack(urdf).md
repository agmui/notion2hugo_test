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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAXEYOJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdahEKVjJefqj1uHi9onYdoIh2m77nDULaDdgqERU4EAiAst1zGAskvCiOYf1%2FKC9wwxx53TnLM%2BepPUX5KM6lf0ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMEMm3bXgsbf3U3i96KtwDgdJkE%2BB8LS%2B1dy%2FhJS%2FTa%2BKORRo%2F0nb4Fni%2B4HSxvZD8f8DL09lmqUEUQMJYhCw6ixYaRN3bVxF6EXdADrx%2F1AhUQ40Ttmm0ELgeEGD3zrkbjFdNjcfRIeVtSpeGJLXANxSKBeduevSsPf3pmEa4gAJ73u1m3xlqd9bJr8UyLlUfW%2Bzrm9n%2BxsOG2VvSsjzcYKuBjYetlpeXr5si6lA3uuAqqiA9sHnKW88yrpIHUMleLNs4oglFN8iPJHEqwEnEtSiLsLNyviRfMMrWGG%2FZbvSOHe6P7cl4U4fJSy6G4XRV0X97RPn44pjNfoxYc2nLMIxoxurqjD8Kg3UwIUFkgeHfiGnVp1Gkc5ymNmP5KM3rst3SkcUJ1spRBeQsCiSev75z8U7poE01jDNEIIVQbu3WMbwO3DTq4lQRWhGWcW3z2UAQKG3XUQj%2BceJsHQml7JxBVlVtGx4MVK4dvRYtXqvcwbRycxvippZWaSvAi%2FLP35fyUP8XUBI8IQdKbIFZW4C24p1onHuSDQguWITW2z1CzRmI%2BHBhO6UUBeaX76dctwd0wCnB1a1pbdQbW%2FPG7UzXInTujB8NdEV0Jxf%2FFzEwsp%2BpEvpsKvoSjyer9G7x52OQhiT6VnxtC1EwzfHuvQY6pgHVxKL4Dz4OG9weB3X6GsDCHmOLEpwoEtR7LK3ZvfBZ4xX8oIhek2IgYCw4kDrJD3xo0K876shPuWghO4ACnvHLIPAJ89LvEPtKX9kqwz7zmBC9ugtfc504RVAT59rNHxepcSLdFgdkGtorI%2FEsdJKdXl1gKHC7QleXG4eMNt1RXs9ymov7ceRrEQ3iOe9n70HydLA5qJkCaY%2Bj5Nkia0SIKR4LRDrM&X-Amz-Signature=71fea55c5efd237e7a3224e292827bc753c0dbda8dfa0e322a30facac4dabaee&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAXEYOJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdahEKVjJefqj1uHi9onYdoIh2m77nDULaDdgqERU4EAiAst1zGAskvCiOYf1%2FKC9wwxx53TnLM%2BepPUX5KM6lf0ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMEMm3bXgsbf3U3i96KtwDgdJkE%2BB8LS%2B1dy%2FhJS%2FTa%2BKORRo%2F0nb4Fni%2B4HSxvZD8f8DL09lmqUEUQMJYhCw6ixYaRN3bVxF6EXdADrx%2F1AhUQ40Ttmm0ELgeEGD3zrkbjFdNjcfRIeVtSpeGJLXANxSKBeduevSsPf3pmEa4gAJ73u1m3xlqd9bJr8UyLlUfW%2Bzrm9n%2BxsOG2VvSsjzcYKuBjYetlpeXr5si6lA3uuAqqiA9sHnKW88yrpIHUMleLNs4oglFN8iPJHEqwEnEtSiLsLNyviRfMMrWGG%2FZbvSOHe6P7cl4U4fJSy6G4XRV0X97RPn44pjNfoxYc2nLMIxoxurqjD8Kg3UwIUFkgeHfiGnVp1Gkc5ymNmP5KM3rst3SkcUJ1spRBeQsCiSev75z8U7poE01jDNEIIVQbu3WMbwO3DTq4lQRWhGWcW3z2UAQKG3XUQj%2BceJsHQml7JxBVlVtGx4MVK4dvRYtXqvcwbRycxvippZWaSvAi%2FLP35fyUP8XUBI8IQdKbIFZW4C24p1onHuSDQguWITW2z1CzRmI%2BHBhO6UUBeaX76dctwd0wCnB1a1pbdQbW%2FPG7UzXInTujB8NdEV0Jxf%2FFzEwsp%2BpEvpsKvoSjyer9G7x52OQhiT6VnxtC1EwzfHuvQY6pgHVxKL4Dz4OG9weB3X6GsDCHmOLEpwoEtR7LK3ZvfBZ4xX8oIhek2IgYCw4kDrJD3xo0K876shPuWghO4ACnvHLIPAJ89LvEPtKX9kqwz7zmBC9ugtfc504RVAT59rNHxepcSLdFgdkGtorI%2FEsdJKdXl1gKHC7QleXG4eMNt1RXs9ymov7ceRrEQ3iOe9n70HydLA5qJkCaY%2Bj5Nkia0SIKR4LRDrM&X-Amz-Signature=1cfc4f4190746360485429261f682a35506bf52c0302dca1a20c7f5f1145ce1e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAXEYOJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdahEKVjJefqj1uHi9onYdoIh2m77nDULaDdgqERU4EAiAst1zGAskvCiOYf1%2FKC9wwxx53TnLM%2BepPUX5KM6lf0ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMEMm3bXgsbf3U3i96KtwDgdJkE%2BB8LS%2B1dy%2FhJS%2FTa%2BKORRo%2F0nb4Fni%2B4HSxvZD8f8DL09lmqUEUQMJYhCw6ixYaRN3bVxF6EXdADrx%2F1AhUQ40Ttmm0ELgeEGD3zrkbjFdNjcfRIeVtSpeGJLXANxSKBeduevSsPf3pmEa4gAJ73u1m3xlqd9bJr8UyLlUfW%2Bzrm9n%2BxsOG2VvSsjzcYKuBjYetlpeXr5si6lA3uuAqqiA9sHnKW88yrpIHUMleLNs4oglFN8iPJHEqwEnEtSiLsLNyviRfMMrWGG%2FZbvSOHe6P7cl4U4fJSy6G4XRV0X97RPn44pjNfoxYc2nLMIxoxurqjD8Kg3UwIUFkgeHfiGnVp1Gkc5ymNmP5KM3rst3SkcUJ1spRBeQsCiSev75z8U7poE01jDNEIIVQbu3WMbwO3DTq4lQRWhGWcW3z2UAQKG3XUQj%2BceJsHQml7JxBVlVtGx4MVK4dvRYtXqvcwbRycxvippZWaSvAi%2FLP35fyUP8XUBI8IQdKbIFZW4C24p1onHuSDQguWITW2z1CzRmI%2BHBhO6UUBeaX76dctwd0wCnB1a1pbdQbW%2FPG7UzXInTujB8NdEV0Jxf%2FFzEwsp%2BpEvpsKvoSjyer9G7x52OQhiT6VnxtC1EwzfHuvQY6pgHVxKL4Dz4OG9weB3X6GsDCHmOLEpwoEtR7LK3ZvfBZ4xX8oIhek2IgYCw4kDrJD3xo0K876shPuWghO4ACnvHLIPAJ89LvEPtKX9kqwz7zmBC9ugtfc504RVAT59rNHxepcSLdFgdkGtorI%2FEsdJKdXl1gKHC7QleXG4eMNt1RXs9ymov7ceRrEQ3iOe9n70HydLA5qJkCaY%2Bj5Nkia0SIKR4LRDrM&X-Amz-Signature=83b1c12a2174ab27805065f7a1cbb1c28e2ab6ea3f3ff116f687dc1c53884e93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAXEYOJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdahEKVjJefqj1uHi9onYdoIh2m77nDULaDdgqERU4EAiAst1zGAskvCiOYf1%2FKC9wwxx53TnLM%2BepPUX5KM6lf0ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMEMm3bXgsbf3U3i96KtwDgdJkE%2BB8LS%2B1dy%2FhJS%2FTa%2BKORRo%2F0nb4Fni%2B4HSxvZD8f8DL09lmqUEUQMJYhCw6ixYaRN3bVxF6EXdADrx%2F1AhUQ40Ttmm0ELgeEGD3zrkbjFdNjcfRIeVtSpeGJLXANxSKBeduevSsPf3pmEa4gAJ73u1m3xlqd9bJr8UyLlUfW%2Bzrm9n%2BxsOG2VvSsjzcYKuBjYetlpeXr5si6lA3uuAqqiA9sHnKW88yrpIHUMleLNs4oglFN8iPJHEqwEnEtSiLsLNyviRfMMrWGG%2FZbvSOHe6P7cl4U4fJSy6G4XRV0X97RPn44pjNfoxYc2nLMIxoxurqjD8Kg3UwIUFkgeHfiGnVp1Gkc5ymNmP5KM3rst3SkcUJ1spRBeQsCiSev75z8U7poE01jDNEIIVQbu3WMbwO3DTq4lQRWhGWcW3z2UAQKG3XUQj%2BceJsHQml7JxBVlVtGx4MVK4dvRYtXqvcwbRycxvippZWaSvAi%2FLP35fyUP8XUBI8IQdKbIFZW4C24p1onHuSDQguWITW2z1CzRmI%2BHBhO6UUBeaX76dctwd0wCnB1a1pbdQbW%2FPG7UzXInTujB8NdEV0Jxf%2FFzEwsp%2BpEvpsKvoSjyer9G7x52OQhiT6VnxtC1EwzfHuvQY6pgHVxKL4Dz4OG9weB3X6GsDCHmOLEpwoEtR7LK3ZvfBZ4xX8oIhek2IgYCw4kDrJD3xo0K876shPuWghO4ACnvHLIPAJ89LvEPtKX9kqwz7zmBC9ugtfc504RVAT59rNHxepcSLdFgdkGtorI%2FEsdJKdXl1gKHC7QleXG4eMNt1RXs9ymov7ceRrEQ3iOe9n70HydLA5qJkCaY%2Bj5Nkia0SIKR4LRDrM&X-Amz-Signature=dbb908de18650190be33dfba23861168c03d2d784aaadf3a49f000574d3ec387&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAXEYOJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdahEKVjJefqj1uHi9onYdoIh2m77nDULaDdgqERU4EAiAst1zGAskvCiOYf1%2FKC9wwxx53TnLM%2BepPUX5KM6lf0ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMEMm3bXgsbf3U3i96KtwDgdJkE%2BB8LS%2B1dy%2FhJS%2FTa%2BKORRo%2F0nb4Fni%2B4HSxvZD8f8DL09lmqUEUQMJYhCw6ixYaRN3bVxF6EXdADrx%2F1AhUQ40Ttmm0ELgeEGD3zrkbjFdNjcfRIeVtSpeGJLXANxSKBeduevSsPf3pmEa4gAJ73u1m3xlqd9bJr8UyLlUfW%2Bzrm9n%2BxsOG2VvSsjzcYKuBjYetlpeXr5si6lA3uuAqqiA9sHnKW88yrpIHUMleLNs4oglFN8iPJHEqwEnEtSiLsLNyviRfMMrWGG%2FZbvSOHe6P7cl4U4fJSy6G4XRV0X97RPn44pjNfoxYc2nLMIxoxurqjD8Kg3UwIUFkgeHfiGnVp1Gkc5ymNmP5KM3rst3SkcUJ1spRBeQsCiSev75z8U7poE01jDNEIIVQbu3WMbwO3DTq4lQRWhGWcW3z2UAQKG3XUQj%2BceJsHQml7JxBVlVtGx4MVK4dvRYtXqvcwbRycxvippZWaSvAi%2FLP35fyUP8XUBI8IQdKbIFZW4C24p1onHuSDQguWITW2z1CzRmI%2BHBhO6UUBeaX76dctwd0wCnB1a1pbdQbW%2FPG7UzXInTujB8NdEV0Jxf%2FFzEwsp%2BpEvpsKvoSjyer9G7x52OQhiT6VnxtC1EwzfHuvQY6pgHVxKL4Dz4OG9weB3X6GsDCHmOLEpwoEtR7LK3ZvfBZ4xX8oIhek2IgYCw4kDrJD3xo0K876shPuWghO4ACnvHLIPAJ89LvEPtKX9kqwz7zmBC9ugtfc504RVAT59rNHxepcSLdFgdkGtorI%2FEsdJKdXl1gKHC7QleXG4eMNt1RXs9ymov7ceRrEQ3iOe9n70HydLA5qJkCaY%2Bj5Nkia0SIKR4LRDrM&X-Amz-Signature=75804ee7605c9c1d80f0a71267ac7f9b4cb4d4a2b5b8c22c202a222eccba2d31&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LAXEYOJ%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBdahEKVjJefqj1uHi9onYdoIh2m77nDULaDdgqERU4EAiAst1zGAskvCiOYf1%2FKC9wwxx53TnLM%2BepPUX5KM6lf0ir%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMEMm3bXgsbf3U3i96KtwDgdJkE%2BB8LS%2B1dy%2FhJS%2FTa%2BKORRo%2F0nb4Fni%2B4HSxvZD8f8DL09lmqUEUQMJYhCw6ixYaRN3bVxF6EXdADrx%2F1AhUQ40Ttmm0ELgeEGD3zrkbjFdNjcfRIeVtSpeGJLXANxSKBeduevSsPf3pmEa4gAJ73u1m3xlqd9bJr8UyLlUfW%2Bzrm9n%2BxsOG2VvSsjzcYKuBjYetlpeXr5si6lA3uuAqqiA9sHnKW88yrpIHUMleLNs4oglFN8iPJHEqwEnEtSiLsLNyviRfMMrWGG%2FZbvSOHe6P7cl4U4fJSy6G4XRV0X97RPn44pjNfoxYc2nLMIxoxurqjD8Kg3UwIUFkgeHfiGnVp1Gkc5ymNmP5KM3rst3SkcUJ1spRBeQsCiSev75z8U7poE01jDNEIIVQbu3WMbwO3DTq4lQRWhGWcW3z2UAQKG3XUQj%2BceJsHQml7JxBVlVtGx4MVK4dvRYtXqvcwbRycxvippZWaSvAi%2FLP35fyUP8XUBI8IQdKbIFZW4C24p1onHuSDQguWITW2z1CzRmI%2BHBhO6UUBeaX76dctwd0wCnB1a1pbdQbW%2FPG7UzXInTujB8NdEV0Jxf%2FFzEwsp%2BpEvpsKvoSjyer9G7x52OQhiT6VnxtC1EwzfHuvQY6pgHVxKL4Dz4OG9weB3X6GsDCHmOLEpwoEtR7LK3ZvfBZ4xX8oIhek2IgYCw4kDrJD3xo0K876shPuWghO4ACnvHLIPAJ89LvEPtKX9kqwz7zmBC9ugtfc504RVAT59rNHxepcSLdFgdkGtorI%2FEsdJKdXl1gKHC7QleXG4eMNt1RXs9ymov7ceRrEQ3iOe9n70HydLA5qJkCaY%2Bj5Nkia0SIKR4LRDrM&X-Amz-Signature=a87082f5c93be74c4e79b3a6f1daa4d8c068c27a4482abf84d62d3b2e89500d9&X-Amz-SignedHeaders=host&x-id=GetObject)
