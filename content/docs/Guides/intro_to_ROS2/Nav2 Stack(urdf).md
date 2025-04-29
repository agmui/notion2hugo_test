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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7KWV3J%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxavXF7RKrjff6FfaPK7YMa96TMwmXYP%2BufU8h6stBwIgCrNdmv6VWVQHSODCLgXi%2BjrT4hH%2FHJxzunrJZzYb5wEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPW230qNGobOsOCASrcAz0tCmyMiG44R2X%2BIyQWTn%2B3gVYlRiVwKewKHwWw2WvJ84EGnqE4h%2BXYy3h2OY%2BXrXiheT8wRuSwB0JjdG09ecI9%2BifjHpd%2BaFgxsJuwEuS6J0bYgvei4HaNiUUHRVwvc3B4Enlc6dIyQSeP9uIlu3iDPMtWCC%2FoeNrYcvhCxDpSEMUyydVz8jQWTqcr%2FOonWPF1Z%2FzmGTAOxljiJvBEX8FzPuDXV3BcFfWojGBO93dxqBO4ww6mhPxiWdfRTJohJ5fBL2gAGvovyoftZDHSbMAIE2h66EsQ5OP1zZOnTq5EpJOEUqmj14EYw7Zc8%2B4hlL404y%2FWMYf56OWHIWay0TjmD9skZjNRPq5EXxdzJQ3Qp5MYYWIFDllGNVi33w6NeJ6IjCH5Gc7Gbj%2FbZlZH8hHBmAEY3r%2F2ww1bs8ewAj1Nf1Ciusiy6crqBiUNZiQOVmq0yO8xTEfassX5lBTm7%2FxKNB%2BfZL4GhUZ15Eo16yINUSmDEOLLOEcvLY98g7BBX9KMujQiAwKUaJ54Y3xHxiah32x18zJIBsPSfXaBaWKH%2FrMbYCiy6hYFmn%2FwHlDpKdLQVXX%2F7DpYuD1YhcoViLEkrsgVeCuFKh3Z5vshedZLvQnk%2BYNWnEvzhF0bMPC%2BwMAGOqUBjk1no6pxqDP%2FcKCKuPz9A84yCpZfLjtc0IHOI%2BwKR1OkgGBYYc1r282ckjmZ1cLg8cbqSIt%2BgSBxczdoNSembTMjrcyEd1JyISmgxM1CK010wqRqO9OHs7ltat7B4dd0GBfBRBWR8APoSvbX7gkjMS6aj1ycuPW8dDRjzche453IVPatpR8%2B%2FOrD7in5ANcz3cGrlFbE87Od4Ry7K6hUxDz%2BHWtz&X-Amz-Signature=7f0427403f827c1b0a282de6344282c149d2caf3713e87950450e14f51201d0d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7KWV3J%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxavXF7RKrjff6FfaPK7YMa96TMwmXYP%2BufU8h6stBwIgCrNdmv6VWVQHSODCLgXi%2BjrT4hH%2FHJxzunrJZzYb5wEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPW230qNGobOsOCASrcAz0tCmyMiG44R2X%2BIyQWTn%2B3gVYlRiVwKewKHwWw2WvJ84EGnqE4h%2BXYy3h2OY%2BXrXiheT8wRuSwB0JjdG09ecI9%2BifjHpd%2BaFgxsJuwEuS6J0bYgvei4HaNiUUHRVwvc3B4Enlc6dIyQSeP9uIlu3iDPMtWCC%2FoeNrYcvhCxDpSEMUyydVz8jQWTqcr%2FOonWPF1Z%2FzmGTAOxljiJvBEX8FzPuDXV3BcFfWojGBO93dxqBO4ww6mhPxiWdfRTJohJ5fBL2gAGvovyoftZDHSbMAIE2h66EsQ5OP1zZOnTq5EpJOEUqmj14EYw7Zc8%2B4hlL404y%2FWMYf56OWHIWay0TjmD9skZjNRPq5EXxdzJQ3Qp5MYYWIFDllGNVi33w6NeJ6IjCH5Gc7Gbj%2FbZlZH8hHBmAEY3r%2F2ww1bs8ewAj1Nf1Ciusiy6crqBiUNZiQOVmq0yO8xTEfassX5lBTm7%2FxKNB%2BfZL4GhUZ15Eo16yINUSmDEOLLOEcvLY98g7BBX9KMujQiAwKUaJ54Y3xHxiah32x18zJIBsPSfXaBaWKH%2FrMbYCiy6hYFmn%2FwHlDpKdLQVXX%2F7DpYuD1YhcoViLEkrsgVeCuFKh3Z5vshedZLvQnk%2BYNWnEvzhF0bMPC%2BwMAGOqUBjk1no6pxqDP%2FcKCKuPz9A84yCpZfLjtc0IHOI%2BwKR1OkgGBYYc1r282ckjmZ1cLg8cbqSIt%2BgSBxczdoNSembTMjrcyEd1JyISmgxM1CK010wqRqO9OHs7ltat7B4dd0GBfBRBWR8APoSvbX7gkjMS6aj1ycuPW8dDRjzche453IVPatpR8%2B%2FOrD7in5ANcz3cGrlFbE87Od4Ry7K6hUxDz%2BHWtz&X-Amz-Signature=e3aa2e7349492b14897029ee32c6c4c0c92c4d64830d5d4ad903a4ad244109ef&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7KWV3J%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxavXF7RKrjff6FfaPK7YMa96TMwmXYP%2BufU8h6stBwIgCrNdmv6VWVQHSODCLgXi%2BjrT4hH%2FHJxzunrJZzYb5wEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPW230qNGobOsOCASrcAz0tCmyMiG44R2X%2BIyQWTn%2B3gVYlRiVwKewKHwWw2WvJ84EGnqE4h%2BXYy3h2OY%2BXrXiheT8wRuSwB0JjdG09ecI9%2BifjHpd%2BaFgxsJuwEuS6J0bYgvei4HaNiUUHRVwvc3B4Enlc6dIyQSeP9uIlu3iDPMtWCC%2FoeNrYcvhCxDpSEMUyydVz8jQWTqcr%2FOonWPF1Z%2FzmGTAOxljiJvBEX8FzPuDXV3BcFfWojGBO93dxqBO4ww6mhPxiWdfRTJohJ5fBL2gAGvovyoftZDHSbMAIE2h66EsQ5OP1zZOnTq5EpJOEUqmj14EYw7Zc8%2B4hlL404y%2FWMYf56OWHIWay0TjmD9skZjNRPq5EXxdzJQ3Qp5MYYWIFDllGNVi33w6NeJ6IjCH5Gc7Gbj%2FbZlZH8hHBmAEY3r%2F2ww1bs8ewAj1Nf1Ciusiy6crqBiUNZiQOVmq0yO8xTEfassX5lBTm7%2FxKNB%2BfZL4GhUZ15Eo16yINUSmDEOLLOEcvLY98g7BBX9KMujQiAwKUaJ54Y3xHxiah32x18zJIBsPSfXaBaWKH%2FrMbYCiy6hYFmn%2FwHlDpKdLQVXX%2F7DpYuD1YhcoViLEkrsgVeCuFKh3Z5vshedZLvQnk%2BYNWnEvzhF0bMPC%2BwMAGOqUBjk1no6pxqDP%2FcKCKuPz9A84yCpZfLjtc0IHOI%2BwKR1OkgGBYYc1r282ckjmZ1cLg8cbqSIt%2BgSBxczdoNSembTMjrcyEd1JyISmgxM1CK010wqRqO9OHs7ltat7B4dd0GBfBRBWR8APoSvbX7gkjMS6aj1ycuPW8dDRjzche453IVPatpR8%2B%2FOrD7in5ANcz3cGrlFbE87Od4Ry7K6hUxDz%2BHWtz&X-Amz-Signature=b3e5bcad1f79f35d02ea2fd6a46fe8310dfb7c9be2d6629f022a50e58fac91be&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7KWV3J%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxavXF7RKrjff6FfaPK7YMa96TMwmXYP%2BufU8h6stBwIgCrNdmv6VWVQHSODCLgXi%2BjrT4hH%2FHJxzunrJZzYb5wEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPW230qNGobOsOCASrcAz0tCmyMiG44R2X%2BIyQWTn%2B3gVYlRiVwKewKHwWw2WvJ84EGnqE4h%2BXYy3h2OY%2BXrXiheT8wRuSwB0JjdG09ecI9%2BifjHpd%2BaFgxsJuwEuS6J0bYgvei4HaNiUUHRVwvc3B4Enlc6dIyQSeP9uIlu3iDPMtWCC%2FoeNrYcvhCxDpSEMUyydVz8jQWTqcr%2FOonWPF1Z%2FzmGTAOxljiJvBEX8FzPuDXV3BcFfWojGBO93dxqBO4ww6mhPxiWdfRTJohJ5fBL2gAGvovyoftZDHSbMAIE2h66EsQ5OP1zZOnTq5EpJOEUqmj14EYw7Zc8%2B4hlL404y%2FWMYf56OWHIWay0TjmD9skZjNRPq5EXxdzJQ3Qp5MYYWIFDllGNVi33w6NeJ6IjCH5Gc7Gbj%2FbZlZH8hHBmAEY3r%2F2ww1bs8ewAj1Nf1Ciusiy6crqBiUNZiQOVmq0yO8xTEfassX5lBTm7%2FxKNB%2BfZL4GhUZ15Eo16yINUSmDEOLLOEcvLY98g7BBX9KMujQiAwKUaJ54Y3xHxiah32x18zJIBsPSfXaBaWKH%2FrMbYCiy6hYFmn%2FwHlDpKdLQVXX%2F7DpYuD1YhcoViLEkrsgVeCuFKh3Z5vshedZLvQnk%2BYNWnEvzhF0bMPC%2BwMAGOqUBjk1no6pxqDP%2FcKCKuPz9A84yCpZfLjtc0IHOI%2BwKR1OkgGBYYc1r282ckjmZ1cLg8cbqSIt%2BgSBxczdoNSembTMjrcyEd1JyISmgxM1CK010wqRqO9OHs7ltat7B4dd0GBfBRBWR8APoSvbX7gkjMS6aj1ycuPW8dDRjzche453IVPatpR8%2B%2FOrD7in5ANcz3cGrlFbE87Od4Ry7K6hUxDz%2BHWtz&X-Amz-Signature=24092b1f792c8069cc1b097e8e6b3f1e7f136a95a0f6a7816aa1bfd1661f70f1&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7KWV3J%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxavXF7RKrjff6FfaPK7YMa96TMwmXYP%2BufU8h6stBwIgCrNdmv6VWVQHSODCLgXi%2BjrT4hH%2FHJxzunrJZzYb5wEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPW230qNGobOsOCASrcAz0tCmyMiG44R2X%2BIyQWTn%2B3gVYlRiVwKewKHwWw2WvJ84EGnqE4h%2BXYy3h2OY%2BXrXiheT8wRuSwB0JjdG09ecI9%2BifjHpd%2BaFgxsJuwEuS6J0bYgvei4HaNiUUHRVwvc3B4Enlc6dIyQSeP9uIlu3iDPMtWCC%2FoeNrYcvhCxDpSEMUyydVz8jQWTqcr%2FOonWPF1Z%2FzmGTAOxljiJvBEX8FzPuDXV3BcFfWojGBO93dxqBO4ww6mhPxiWdfRTJohJ5fBL2gAGvovyoftZDHSbMAIE2h66EsQ5OP1zZOnTq5EpJOEUqmj14EYw7Zc8%2B4hlL404y%2FWMYf56OWHIWay0TjmD9skZjNRPq5EXxdzJQ3Qp5MYYWIFDllGNVi33w6NeJ6IjCH5Gc7Gbj%2FbZlZH8hHBmAEY3r%2F2ww1bs8ewAj1Nf1Ciusiy6crqBiUNZiQOVmq0yO8xTEfassX5lBTm7%2FxKNB%2BfZL4GhUZ15Eo16yINUSmDEOLLOEcvLY98g7BBX9KMujQiAwKUaJ54Y3xHxiah32x18zJIBsPSfXaBaWKH%2FrMbYCiy6hYFmn%2FwHlDpKdLQVXX%2F7DpYuD1YhcoViLEkrsgVeCuFKh3Z5vshedZLvQnk%2BYNWnEvzhF0bMPC%2BwMAGOqUBjk1no6pxqDP%2FcKCKuPz9A84yCpZfLjtc0IHOI%2BwKR1OkgGBYYc1r282ckjmZ1cLg8cbqSIt%2BgSBxczdoNSembTMjrcyEd1JyISmgxM1CK010wqRqO9OHs7ltat7B4dd0GBfBRBWR8APoSvbX7gkjMS6aj1ycuPW8dDRjzche453IVPatpR8%2B%2FOrD7in5ANcz3cGrlFbE87Od4Ry7K6hUxDz%2BHWtz&X-Amz-Signature=b0b7ba8d5c804c3f35094cf4bd78095779613ce62f96a4eab4b2806299c8ecb5&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN7KWV3J%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T033059Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxavXF7RKrjff6FfaPK7YMa96TMwmXYP%2BufU8h6stBwIgCrNdmv6VWVQHSODCLgXi%2BjrT4hH%2FHJxzunrJZzYb5wEqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMPW230qNGobOsOCASrcAz0tCmyMiG44R2X%2BIyQWTn%2B3gVYlRiVwKewKHwWw2WvJ84EGnqE4h%2BXYy3h2OY%2BXrXiheT8wRuSwB0JjdG09ecI9%2BifjHpd%2BaFgxsJuwEuS6J0bYgvei4HaNiUUHRVwvc3B4Enlc6dIyQSeP9uIlu3iDPMtWCC%2FoeNrYcvhCxDpSEMUyydVz8jQWTqcr%2FOonWPF1Z%2FzmGTAOxljiJvBEX8FzPuDXV3BcFfWojGBO93dxqBO4ww6mhPxiWdfRTJohJ5fBL2gAGvovyoftZDHSbMAIE2h66EsQ5OP1zZOnTq5EpJOEUqmj14EYw7Zc8%2B4hlL404y%2FWMYf56OWHIWay0TjmD9skZjNRPq5EXxdzJQ3Qp5MYYWIFDllGNVi33w6NeJ6IjCH5Gc7Gbj%2FbZlZH8hHBmAEY3r%2F2ww1bs8ewAj1Nf1Ciusiy6crqBiUNZiQOVmq0yO8xTEfassX5lBTm7%2FxKNB%2BfZL4GhUZ15Eo16yINUSmDEOLLOEcvLY98g7BBX9KMujQiAwKUaJ54Y3xHxiah32x18zJIBsPSfXaBaWKH%2FrMbYCiy6hYFmn%2FwHlDpKdLQVXX%2F7DpYuD1YhcoViLEkrsgVeCuFKh3Z5vshedZLvQnk%2BYNWnEvzhF0bMPC%2BwMAGOqUBjk1no6pxqDP%2FcKCKuPz9A84yCpZfLjtc0IHOI%2BwKR1OkgGBYYc1r282ckjmZ1cLg8cbqSIt%2BgSBxczdoNSembTMjrcyEd1JyISmgxM1CK010wqRqO9OHs7ltat7B4dd0GBfBRBWR8APoSvbX7gkjMS6aj1ycuPW8dDRjzche453IVPatpR8%2B%2FOrD7in5ANcz3cGrlFbE87Od4Ry7K6hUxDz%2BHWtz&X-Amz-Signature=55700f57b2d92124f0598a39b578cf1ebf2c45ae761e33bd264acc4721bdaaea&X-Amz-SignedHeaders=host&x-id=GetObject)
