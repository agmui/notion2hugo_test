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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HVUYPK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvZh1nMcRSvor0fB0ULEgDMVKnPulQj162f32YX0LRxwIhAI9L82rSeQN9qVDjGFEex0XnKKnbVByeE5hyIRI6qvm5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgxNFWpmsYRZxYOvn3sq3ANhh%2BrEPftSXz%2B8qa7W%2B4e9FVhip0uXIt4NLKWnly%2BI9hFJYiBfXRGnqxC5fA2786uBX83aQsmaIrAC811NqyxYRSNz9puJSyRevLqqsq5YmJkdxLHmBHsUhyKzjWh0BswCC95k1xk5TSH88I69tPqwrJjuWZcxwDkuUiGBQ%2B0IpSNROf4L%2BA%2FuS%2BIxXgqLrEWX57vCL3%2FOl65pE5H%2F11rzb3Fw15Wq4mQX9uulFSsCe1JOMzpZlssh3Vbdt2z%2BAf6GHZjZJp%2F4uRyDkQI%2BTlK0N2Sgou%2Bw1ZM%2BAp7rrcJ3mjhRuhxIYsR1hWnvxmEB9Thet7CFhLU7Ei74H%2FupmcZb5kHIydC9wW%2B8Uasy5meWJW5zPJtmQHy4FVuQsac5wPleNCrRUs%2BybdMM177s%2BeaNx%2BJOwVZJw51Q4InWguakzX0CXEUcmfZWFSV%2F9FpQLL6F5OsAgHfzI9LcixEAJWsGoqzzGuQQo8lcw93WT1jDjs7jI6sXI8UVBEx3UN5VFrbX1IUgumlQTomlNjHf1T1l31tAptYW524%2FAvPs03xVP4CkFRaRiA4RFk9g3hzlppS3ZfpiuBVIF6gSJQVmctnDbeLZN%2F39kCq51wk08vKGpU1BWLuJz7wDubJMvzCEo5a%2FBjqkAWmnBReRNVCMr2ARexCTaTK2MRsK8%2BW3mVt3jrT%2Ba3fFJa%2BWRQ4qpcZDP%2BxjOjy5wgsAQuT47wksa1s5yaOXxSJ86ak0dfHOULkF2JyO%2FP9JHo3MGE1UrtkogDhFkxVeGdHGD9kqM3uDXc%2BsbNtzV%2BDy9IRLuANF7PyIE44f2QI23m%2BB%2BGXwVriX%2F49nC7eXSH5F2KS92JNYre6uhLEnRu326ojd&X-Amz-Signature=8b01dd1db4726cf70f963ab4f5d3fcd3faaa6f878513ebbce6cb5440c21c37b2&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HVUYPK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvZh1nMcRSvor0fB0ULEgDMVKnPulQj162f32YX0LRxwIhAI9L82rSeQN9qVDjGFEex0XnKKnbVByeE5hyIRI6qvm5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgxNFWpmsYRZxYOvn3sq3ANhh%2BrEPftSXz%2B8qa7W%2B4e9FVhip0uXIt4NLKWnly%2BI9hFJYiBfXRGnqxC5fA2786uBX83aQsmaIrAC811NqyxYRSNz9puJSyRevLqqsq5YmJkdxLHmBHsUhyKzjWh0BswCC95k1xk5TSH88I69tPqwrJjuWZcxwDkuUiGBQ%2B0IpSNROf4L%2BA%2FuS%2BIxXgqLrEWX57vCL3%2FOl65pE5H%2F11rzb3Fw15Wq4mQX9uulFSsCe1JOMzpZlssh3Vbdt2z%2BAf6GHZjZJp%2F4uRyDkQI%2BTlK0N2Sgou%2Bw1ZM%2BAp7rrcJ3mjhRuhxIYsR1hWnvxmEB9Thet7CFhLU7Ei74H%2FupmcZb5kHIydC9wW%2B8Uasy5meWJW5zPJtmQHy4FVuQsac5wPleNCrRUs%2BybdMM177s%2BeaNx%2BJOwVZJw51Q4InWguakzX0CXEUcmfZWFSV%2F9FpQLL6F5OsAgHfzI9LcixEAJWsGoqzzGuQQo8lcw93WT1jDjs7jI6sXI8UVBEx3UN5VFrbX1IUgumlQTomlNjHf1T1l31tAptYW524%2FAvPs03xVP4CkFRaRiA4RFk9g3hzlppS3ZfpiuBVIF6gSJQVmctnDbeLZN%2F39kCq51wk08vKGpU1BWLuJz7wDubJMvzCEo5a%2FBjqkAWmnBReRNVCMr2ARexCTaTK2MRsK8%2BW3mVt3jrT%2Ba3fFJa%2BWRQ4qpcZDP%2BxjOjy5wgsAQuT47wksa1s5yaOXxSJ86ak0dfHOULkF2JyO%2FP9JHo3MGE1UrtkogDhFkxVeGdHGD9kqM3uDXc%2BsbNtzV%2BDy9IRLuANF7PyIE44f2QI23m%2BB%2BGXwVriX%2F49nC7eXSH5F2KS92JNYre6uhLEnRu326ojd&X-Amz-Signature=cb758c54686d09421fd234eb449bb91779aaf3bbe6cb7c3132b95fd2aa4cc625&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HVUYPK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvZh1nMcRSvor0fB0ULEgDMVKnPulQj162f32YX0LRxwIhAI9L82rSeQN9qVDjGFEex0XnKKnbVByeE5hyIRI6qvm5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgxNFWpmsYRZxYOvn3sq3ANhh%2BrEPftSXz%2B8qa7W%2B4e9FVhip0uXIt4NLKWnly%2BI9hFJYiBfXRGnqxC5fA2786uBX83aQsmaIrAC811NqyxYRSNz9puJSyRevLqqsq5YmJkdxLHmBHsUhyKzjWh0BswCC95k1xk5TSH88I69tPqwrJjuWZcxwDkuUiGBQ%2B0IpSNROf4L%2BA%2FuS%2BIxXgqLrEWX57vCL3%2FOl65pE5H%2F11rzb3Fw15Wq4mQX9uulFSsCe1JOMzpZlssh3Vbdt2z%2BAf6GHZjZJp%2F4uRyDkQI%2BTlK0N2Sgou%2Bw1ZM%2BAp7rrcJ3mjhRuhxIYsR1hWnvxmEB9Thet7CFhLU7Ei74H%2FupmcZb5kHIydC9wW%2B8Uasy5meWJW5zPJtmQHy4FVuQsac5wPleNCrRUs%2BybdMM177s%2BeaNx%2BJOwVZJw51Q4InWguakzX0CXEUcmfZWFSV%2F9FpQLL6F5OsAgHfzI9LcixEAJWsGoqzzGuQQo8lcw93WT1jDjs7jI6sXI8UVBEx3UN5VFrbX1IUgumlQTomlNjHf1T1l31tAptYW524%2FAvPs03xVP4CkFRaRiA4RFk9g3hzlppS3ZfpiuBVIF6gSJQVmctnDbeLZN%2F39kCq51wk08vKGpU1BWLuJz7wDubJMvzCEo5a%2FBjqkAWmnBReRNVCMr2ARexCTaTK2MRsK8%2BW3mVt3jrT%2Ba3fFJa%2BWRQ4qpcZDP%2BxjOjy5wgsAQuT47wksa1s5yaOXxSJ86ak0dfHOULkF2JyO%2FP9JHo3MGE1UrtkogDhFkxVeGdHGD9kqM3uDXc%2BsbNtzV%2BDy9IRLuANF7PyIE44f2QI23m%2BB%2BGXwVriX%2F49nC7eXSH5F2KS92JNYre6uhLEnRu326ojd&X-Amz-Signature=408f1798394f9efc5a8ac50c0cf210bfff9d21d6ee10c24e2fdabea414796ec4&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HVUYPK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvZh1nMcRSvor0fB0ULEgDMVKnPulQj162f32YX0LRxwIhAI9L82rSeQN9qVDjGFEex0XnKKnbVByeE5hyIRI6qvm5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgxNFWpmsYRZxYOvn3sq3ANhh%2BrEPftSXz%2B8qa7W%2B4e9FVhip0uXIt4NLKWnly%2BI9hFJYiBfXRGnqxC5fA2786uBX83aQsmaIrAC811NqyxYRSNz9puJSyRevLqqsq5YmJkdxLHmBHsUhyKzjWh0BswCC95k1xk5TSH88I69tPqwrJjuWZcxwDkuUiGBQ%2B0IpSNROf4L%2BA%2FuS%2BIxXgqLrEWX57vCL3%2FOl65pE5H%2F11rzb3Fw15Wq4mQX9uulFSsCe1JOMzpZlssh3Vbdt2z%2BAf6GHZjZJp%2F4uRyDkQI%2BTlK0N2Sgou%2Bw1ZM%2BAp7rrcJ3mjhRuhxIYsR1hWnvxmEB9Thet7CFhLU7Ei74H%2FupmcZb5kHIydC9wW%2B8Uasy5meWJW5zPJtmQHy4FVuQsac5wPleNCrRUs%2BybdMM177s%2BeaNx%2BJOwVZJw51Q4InWguakzX0CXEUcmfZWFSV%2F9FpQLL6F5OsAgHfzI9LcixEAJWsGoqzzGuQQo8lcw93WT1jDjs7jI6sXI8UVBEx3UN5VFrbX1IUgumlQTomlNjHf1T1l31tAptYW524%2FAvPs03xVP4CkFRaRiA4RFk9g3hzlppS3ZfpiuBVIF6gSJQVmctnDbeLZN%2F39kCq51wk08vKGpU1BWLuJz7wDubJMvzCEo5a%2FBjqkAWmnBReRNVCMr2ARexCTaTK2MRsK8%2BW3mVt3jrT%2Ba3fFJa%2BWRQ4qpcZDP%2BxjOjy5wgsAQuT47wksa1s5yaOXxSJ86ak0dfHOULkF2JyO%2FP9JHo3MGE1UrtkogDhFkxVeGdHGD9kqM3uDXc%2BsbNtzV%2BDy9IRLuANF7PyIE44f2QI23m%2BB%2BGXwVriX%2F49nC7eXSH5F2KS92JNYre6uhLEnRu326ojd&X-Amz-Signature=7fdff542574daaa3987c90c774bd91be5334abd16f7a0fc51ed792c03395e72b&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HVUYPK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvZh1nMcRSvor0fB0ULEgDMVKnPulQj162f32YX0LRxwIhAI9L82rSeQN9qVDjGFEex0XnKKnbVByeE5hyIRI6qvm5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgxNFWpmsYRZxYOvn3sq3ANhh%2BrEPftSXz%2B8qa7W%2B4e9FVhip0uXIt4NLKWnly%2BI9hFJYiBfXRGnqxC5fA2786uBX83aQsmaIrAC811NqyxYRSNz9puJSyRevLqqsq5YmJkdxLHmBHsUhyKzjWh0BswCC95k1xk5TSH88I69tPqwrJjuWZcxwDkuUiGBQ%2B0IpSNROf4L%2BA%2FuS%2BIxXgqLrEWX57vCL3%2FOl65pE5H%2F11rzb3Fw15Wq4mQX9uulFSsCe1JOMzpZlssh3Vbdt2z%2BAf6GHZjZJp%2F4uRyDkQI%2BTlK0N2Sgou%2Bw1ZM%2BAp7rrcJ3mjhRuhxIYsR1hWnvxmEB9Thet7CFhLU7Ei74H%2FupmcZb5kHIydC9wW%2B8Uasy5meWJW5zPJtmQHy4FVuQsac5wPleNCrRUs%2BybdMM177s%2BeaNx%2BJOwVZJw51Q4InWguakzX0CXEUcmfZWFSV%2F9FpQLL6F5OsAgHfzI9LcixEAJWsGoqzzGuQQo8lcw93WT1jDjs7jI6sXI8UVBEx3UN5VFrbX1IUgumlQTomlNjHf1T1l31tAptYW524%2FAvPs03xVP4CkFRaRiA4RFk9g3hzlppS3ZfpiuBVIF6gSJQVmctnDbeLZN%2F39kCq51wk08vKGpU1BWLuJz7wDubJMvzCEo5a%2FBjqkAWmnBReRNVCMr2ARexCTaTK2MRsK8%2BW3mVt3jrT%2Ba3fFJa%2BWRQ4qpcZDP%2BxjOjy5wgsAQuT47wksa1s5yaOXxSJ86ak0dfHOULkF2JyO%2FP9JHo3MGE1UrtkogDhFkxVeGdHGD9kqM3uDXc%2BsbNtzV%2BDy9IRLuANF7PyIE44f2QI23m%2BB%2BGXwVriX%2F49nC7eXSH5F2KS92JNYre6uhLEnRu326ojd&X-Amz-Signature=a079f3cd9997353a9a6d57a60db40a981c3e6c7205f6ebd9cdf9c21154dcb7b7&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2HVUYPK%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T181135Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvZh1nMcRSvor0fB0ULEgDMVKnPulQj162f32YX0LRxwIhAI9L82rSeQN9qVDjGFEex0XnKKnbVByeE5hyIRI6qvm5Kv8DCEsQABoMNjM3NDIzMTgzODA1IgxNFWpmsYRZxYOvn3sq3ANhh%2BrEPftSXz%2B8qa7W%2B4e9FVhip0uXIt4NLKWnly%2BI9hFJYiBfXRGnqxC5fA2786uBX83aQsmaIrAC811NqyxYRSNz9puJSyRevLqqsq5YmJkdxLHmBHsUhyKzjWh0BswCC95k1xk5TSH88I69tPqwrJjuWZcxwDkuUiGBQ%2B0IpSNROf4L%2BA%2FuS%2BIxXgqLrEWX57vCL3%2FOl65pE5H%2F11rzb3Fw15Wq4mQX9uulFSsCe1JOMzpZlssh3Vbdt2z%2BAf6GHZjZJp%2F4uRyDkQI%2BTlK0N2Sgou%2Bw1ZM%2BAp7rrcJ3mjhRuhxIYsR1hWnvxmEB9Thet7CFhLU7Ei74H%2FupmcZb5kHIydC9wW%2B8Uasy5meWJW5zPJtmQHy4FVuQsac5wPleNCrRUs%2BybdMM177s%2BeaNx%2BJOwVZJw51Q4InWguakzX0CXEUcmfZWFSV%2F9FpQLL6F5OsAgHfzI9LcixEAJWsGoqzzGuQQo8lcw93WT1jDjs7jI6sXI8UVBEx3UN5VFrbX1IUgumlQTomlNjHf1T1l31tAptYW524%2FAvPs03xVP4CkFRaRiA4RFk9g3hzlppS3ZfpiuBVIF6gSJQVmctnDbeLZN%2F39kCq51wk08vKGpU1BWLuJz7wDubJMvzCEo5a%2FBjqkAWmnBReRNVCMr2ARexCTaTK2MRsK8%2BW3mVt3jrT%2Ba3fFJa%2BWRQ4qpcZDP%2BxjOjy5wgsAQuT47wksa1s5yaOXxSJ86ak0dfHOULkF2JyO%2FP9JHo3MGE1UrtkogDhFkxVeGdHGD9kqM3uDXc%2BsbNtzV%2BDy9IRLuANF7PyIE44f2QI23m%2BB%2BGXwVriX%2F49nC7eXSH5F2KS92JNYre6uhLEnRu326ojd&X-Amz-Signature=a4783f546e17027f99ceb978ea1a7936977a3ee0d0702eeb80205747a8b3a039&X-Amz-SignedHeaders=host&x-id=GetObject)
