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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMY2U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC84WIZNoLk2l9bH%2F1n%2Ba8N%2BoNUCfHrEfiCneDPZCpWewIgIKHaSd0OXHtv8iAiS7LYD0x380n4NXUkVBJBaG5%2FATsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkkJz05OqRatbmDQSrcA8cfNtSUaG7hjgKQznc3UVu3hl8%2FHw1cuLWd0vfVORAtezOHk3QaNcfHbJONi%2BmZOs07rW6vJR%2Feg9egy9y7UMUufEJxBDJNopNPA2VyCaCGy1IOf7XA2oZBxgB%2FyMdpEoX3cOKfMh5yEpf6TFxqKmYJ2afDNdTGtH1PmbWPb0J7KeywUF2qpDgg4VPbasjy4BrVuq7QKZ6cRDAy89etDdM64%2FGZEvQSJkxOvjz2q325cxWiay3t7AETKoVNVaRfkHSGlnYYUBr2TXeoyYGkdrdcHM0GFgSJ%2FwfrIsLLz%2B9R1xJM5SfoVAy%2BHuI%2FpD46Rtc%2FI4n62HaPfeIFbh%2BQvGeSU5Z2R%2Bt6hkujMqTx8TfSTn8jvGebIqfcB6BHJ8qr%2BrTQGjwWdJ%2Bo50oI1jR5i%2BJFxUyHWIvlADtwo12QsMbxSkEFowKeQl5IgGtdmYC1GnoqkJgCdSg3YU5bZd%2FRnJQSLuXp8xAkhcmMlhiQjZrCZzrFYX4vh2T2SertFQJ%2FeeBr1hdFFVJ1RHgIEdcltcykoXYWOFOLb3XHdpgprrVb43dbuMUzDnRB9f6gOMo0qnfTP%2BUZxyAclLkIGxXFjiHSby9JRr5TSxdIlWrUx1XaScCFaknjpI9SnjKAMLzOwb4GOqUBsaGnpN%2BRFaY3osSvi0bYchqK3K1%2BaRRBWbPy1c50by%2B7sUgVOecQyxKxPGovS5EYLa%2FWcFC528mHh7oMM9uyGjg8ADqTzZAb3Z9qgCpKVCJmaRFwN%2Bo9NHWhOjFD8pC42%2FiEYYxVb1dLylStOEWsduVK5WOh8HNoORzagtZZLEDbrvUof5OIYAm%2BK%2FlkJwWw4%2B4IqmOjpNjIuizG2k7n2YPWG0EN&X-Amz-Signature=356f8400b8eca6728307a8405d86306d5fd6487de0a0ec7a50a672f6edb5463b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMY2U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC84WIZNoLk2l9bH%2F1n%2Ba8N%2BoNUCfHrEfiCneDPZCpWewIgIKHaSd0OXHtv8iAiS7LYD0x380n4NXUkVBJBaG5%2FATsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkkJz05OqRatbmDQSrcA8cfNtSUaG7hjgKQznc3UVu3hl8%2FHw1cuLWd0vfVORAtezOHk3QaNcfHbJONi%2BmZOs07rW6vJR%2Feg9egy9y7UMUufEJxBDJNopNPA2VyCaCGy1IOf7XA2oZBxgB%2FyMdpEoX3cOKfMh5yEpf6TFxqKmYJ2afDNdTGtH1PmbWPb0J7KeywUF2qpDgg4VPbasjy4BrVuq7QKZ6cRDAy89etDdM64%2FGZEvQSJkxOvjz2q325cxWiay3t7AETKoVNVaRfkHSGlnYYUBr2TXeoyYGkdrdcHM0GFgSJ%2FwfrIsLLz%2B9R1xJM5SfoVAy%2BHuI%2FpD46Rtc%2FI4n62HaPfeIFbh%2BQvGeSU5Z2R%2Bt6hkujMqTx8TfSTn8jvGebIqfcB6BHJ8qr%2BrTQGjwWdJ%2Bo50oI1jR5i%2BJFxUyHWIvlADtwo12QsMbxSkEFowKeQl5IgGtdmYC1GnoqkJgCdSg3YU5bZd%2FRnJQSLuXp8xAkhcmMlhiQjZrCZzrFYX4vh2T2SertFQJ%2FeeBr1hdFFVJ1RHgIEdcltcykoXYWOFOLb3XHdpgprrVb43dbuMUzDnRB9f6gOMo0qnfTP%2BUZxyAclLkIGxXFjiHSby9JRr5TSxdIlWrUx1XaScCFaknjpI9SnjKAMLzOwb4GOqUBsaGnpN%2BRFaY3osSvi0bYchqK3K1%2BaRRBWbPy1c50by%2B7sUgVOecQyxKxPGovS5EYLa%2FWcFC528mHh7oMM9uyGjg8ADqTzZAb3Z9qgCpKVCJmaRFwN%2Bo9NHWhOjFD8pC42%2FiEYYxVb1dLylStOEWsduVK5WOh8HNoORzagtZZLEDbrvUof5OIYAm%2BK%2FlkJwWw4%2B4IqmOjpNjIuizG2k7n2YPWG0EN&X-Amz-Signature=2c7f0925c5f9f7824e2e583cb354f49a9685c79e8a54d26a354ec210f205f1d1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMY2U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC84WIZNoLk2l9bH%2F1n%2Ba8N%2BoNUCfHrEfiCneDPZCpWewIgIKHaSd0OXHtv8iAiS7LYD0x380n4NXUkVBJBaG5%2FATsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkkJz05OqRatbmDQSrcA8cfNtSUaG7hjgKQznc3UVu3hl8%2FHw1cuLWd0vfVORAtezOHk3QaNcfHbJONi%2BmZOs07rW6vJR%2Feg9egy9y7UMUufEJxBDJNopNPA2VyCaCGy1IOf7XA2oZBxgB%2FyMdpEoX3cOKfMh5yEpf6TFxqKmYJ2afDNdTGtH1PmbWPb0J7KeywUF2qpDgg4VPbasjy4BrVuq7QKZ6cRDAy89etDdM64%2FGZEvQSJkxOvjz2q325cxWiay3t7AETKoVNVaRfkHSGlnYYUBr2TXeoyYGkdrdcHM0GFgSJ%2FwfrIsLLz%2B9R1xJM5SfoVAy%2BHuI%2FpD46Rtc%2FI4n62HaPfeIFbh%2BQvGeSU5Z2R%2Bt6hkujMqTx8TfSTn8jvGebIqfcB6BHJ8qr%2BrTQGjwWdJ%2Bo50oI1jR5i%2BJFxUyHWIvlADtwo12QsMbxSkEFowKeQl5IgGtdmYC1GnoqkJgCdSg3YU5bZd%2FRnJQSLuXp8xAkhcmMlhiQjZrCZzrFYX4vh2T2SertFQJ%2FeeBr1hdFFVJ1RHgIEdcltcykoXYWOFOLb3XHdpgprrVb43dbuMUzDnRB9f6gOMo0qnfTP%2BUZxyAclLkIGxXFjiHSby9JRr5TSxdIlWrUx1XaScCFaknjpI9SnjKAMLzOwb4GOqUBsaGnpN%2BRFaY3osSvi0bYchqK3K1%2BaRRBWbPy1c50by%2B7sUgVOecQyxKxPGovS5EYLa%2FWcFC528mHh7oMM9uyGjg8ADqTzZAb3Z9qgCpKVCJmaRFwN%2Bo9NHWhOjFD8pC42%2FiEYYxVb1dLylStOEWsduVK5WOh8HNoORzagtZZLEDbrvUof5OIYAm%2BK%2FlkJwWw4%2B4IqmOjpNjIuizG2k7n2YPWG0EN&X-Amz-Signature=85fb30f5dd97d7f4524b4c4f7fc7f92f5810809e027c61a5241edef382dcb5ea&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMY2U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC84WIZNoLk2l9bH%2F1n%2Ba8N%2BoNUCfHrEfiCneDPZCpWewIgIKHaSd0OXHtv8iAiS7LYD0x380n4NXUkVBJBaG5%2FATsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkkJz05OqRatbmDQSrcA8cfNtSUaG7hjgKQznc3UVu3hl8%2FHw1cuLWd0vfVORAtezOHk3QaNcfHbJONi%2BmZOs07rW6vJR%2Feg9egy9y7UMUufEJxBDJNopNPA2VyCaCGy1IOf7XA2oZBxgB%2FyMdpEoX3cOKfMh5yEpf6TFxqKmYJ2afDNdTGtH1PmbWPb0J7KeywUF2qpDgg4VPbasjy4BrVuq7QKZ6cRDAy89etDdM64%2FGZEvQSJkxOvjz2q325cxWiay3t7AETKoVNVaRfkHSGlnYYUBr2TXeoyYGkdrdcHM0GFgSJ%2FwfrIsLLz%2B9R1xJM5SfoVAy%2BHuI%2FpD46Rtc%2FI4n62HaPfeIFbh%2BQvGeSU5Z2R%2Bt6hkujMqTx8TfSTn8jvGebIqfcB6BHJ8qr%2BrTQGjwWdJ%2Bo50oI1jR5i%2BJFxUyHWIvlADtwo12QsMbxSkEFowKeQl5IgGtdmYC1GnoqkJgCdSg3YU5bZd%2FRnJQSLuXp8xAkhcmMlhiQjZrCZzrFYX4vh2T2SertFQJ%2FeeBr1hdFFVJ1RHgIEdcltcykoXYWOFOLb3XHdpgprrVb43dbuMUzDnRB9f6gOMo0qnfTP%2BUZxyAclLkIGxXFjiHSby9JRr5TSxdIlWrUx1XaScCFaknjpI9SnjKAMLzOwb4GOqUBsaGnpN%2BRFaY3osSvi0bYchqK3K1%2BaRRBWbPy1c50by%2B7sUgVOecQyxKxPGovS5EYLa%2FWcFC528mHh7oMM9uyGjg8ADqTzZAb3Z9qgCpKVCJmaRFwN%2Bo9NHWhOjFD8pC42%2FiEYYxVb1dLylStOEWsduVK5WOh8HNoORzagtZZLEDbrvUof5OIYAm%2BK%2FlkJwWw4%2B4IqmOjpNjIuizG2k7n2YPWG0EN&X-Amz-Signature=3af092b67a3b0fb610a7bd5db5c041fb405276473463974a839fe0824ebeb82c&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMY2U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC84WIZNoLk2l9bH%2F1n%2Ba8N%2BoNUCfHrEfiCneDPZCpWewIgIKHaSd0OXHtv8iAiS7LYD0x380n4NXUkVBJBaG5%2FATsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkkJz05OqRatbmDQSrcA8cfNtSUaG7hjgKQznc3UVu3hl8%2FHw1cuLWd0vfVORAtezOHk3QaNcfHbJONi%2BmZOs07rW6vJR%2Feg9egy9y7UMUufEJxBDJNopNPA2VyCaCGy1IOf7XA2oZBxgB%2FyMdpEoX3cOKfMh5yEpf6TFxqKmYJ2afDNdTGtH1PmbWPb0J7KeywUF2qpDgg4VPbasjy4BrVuq7QKZ6cRDAy89etDdM64%2FGZEvQSJkxOvjz2q325cxWiay3t7AETKoVNVaRfkHSGlnYYUBr2TXeoyYGkdrdcHM0GFgSJ%2FwfrIsLLz%2B9R1xJM5SfoVAy%2BHuI%2FpD46Rtc%2FI4n62HaPfeIFbh%2BQvGeSU5Z2R%2Bt6hkujMqTx8TfSTn8jvGebIqfcB6BHJ8qr%2BrTQGjwWdJ%2Bo50oI1jR5i%2BJFxUyHWIvlADtwo12QsMbxSkEFowKeQl5IgGtdmYC1GnoqkJgCdSg3YU5bZd%2FRnJQSLuXp8xAkhcmMlhiQjZrCZzrFYX4vh2T2SertFQJ%2FeeBr1hdFFVJ1RHgIEdcltcykoXYWOFOLb3XHdpgprrVb43dbuMUzDnRB9f6gOMo0qnfTP%2BUZxyAclLkIGxXFjiHSby9JRr5TSxdIlWrUx1XaScCFaknjpI9SnjKAMLzOwb4GOqUBsaGnpN%2BRFaY3osSvi0bYchqK3K1%2BaRRBWbPy1c50by%2B7sUgVOecQyxKxPGovS5EYLa%2FWcFC528mHh7oMM9uyGjg8ADqTzZAb3Z9qgCpKVCJmaRFwN%2Bo9NHWhOjFD8pC42%2FiEYYxVb1dLylStOEWsduVK5WOh8HNoORzagtZZLEDbrvUof5OIYAm%2BK%2FlkJwWw4%2B4IqmOjpNjIuizG2k7n2YPWG0EN&X-Amz-Signature=6ebe1b4321bb571cc9006c65980b059c4cf32328d1ed68d0755cc7e426996ff8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQSMY2U%2F20250311%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250311T170132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQC84WIZNoLk2l9bH%2F1n%2Ba8N%2BoNUCfHrEfiCneDPZCpWewIgIKHaSd0OXHtv8iAiS7LYD0x380n4NXUkVBJBaG5%2FATsqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAkkJz05OqRatbmDQSrcA8cfNtSUaG7hjgKQznc3UVu3hl8%2FHw1cuLWd0vfVORAtezOHk3QaNcfHbJONi%2BmZOs07rW6vJR%2Feg9egy9y7UMUufEJxBDJNopNPA2VyCaCGy1IOf7XA2oZBxgB%2FyMdpEoX3cOKfMh5yEpf6TFxqKmYJ2afDNdTGtH1PmbWPb0J7KeywUF2qpDgg4VPbasjy4BrVuq7QKZ6cRDAy89etDdM64%2FGZEvQSJkxOvjz2q325cxWiay3t7AETKoVNVaRfkHSGlnYYUBr2TXeoyYGkdrdcHM0GFgSJ%2FwfrIsLLz%2B9R1xJM5SfoVAy%2BHuI%2FpD46Rtc%2FI4n62HaPfeIFbh%2BQvGeSU5Z2R%2Bt6hkujMqTx8TfSTn8jvGebIqfcB6BHJ8qr%2BrTQGjwWdJ%2Bo50oI1jR5i%2BJFxUyHWIvlADtwo12QsMbxSkEFowKeQl5IgGtdmYC1GnoqkJgCdSg3YU5bZd%2FRnJQSLuXp8xAkhcmMlhiQjZrCZzrFYX4vh2T2SertFQJ%2FeeBr1hdFFVJ1RHgIEdcltcykoXYWOFOLb3XHdpgprrVb43dbuMUzDnRB9f6gOMo0qnfTP%2BUZxyAclLkIGxXFjiHSby9JRr5TSxdIlWrUx1XaScCFaknjpI9SnjKAMLzOwb4GOqUBsaGnpN%2BRFaY3osSvi0bYchqK3K1%2BaRRBWbPy1c50by%2B7sUgVOecQyxKxPGovS5EYLa%2FWcFC528mHh7oMM9uyGjg8ADqTzZAb3Z9qgCpKVCJmaRFwN%2Bo9NHWhOjFD8pC42%2FiEYYxVb1dLylStOEWsduVK5WOh8HNoORzagtZZLEDbrvUof5OIYAm%2BK%2FlkJwWw4%2B4IqmOjpNjIuizG2k7n2YPWG0EN&X-Amz-Signature=02cf8fb77c7b2a3f6e73aee1239c8d275fe004149e925e66d62b89d1b03eb244&X-Amz-SignedHeaders=host&x-id=GetObject)
