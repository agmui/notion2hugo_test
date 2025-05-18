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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIWW7DC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYrT6eupi%2FX349sFNhkLK6j4mr0sXjlScdjglAOvVgIAiAqaBQgS%2BH0%2FxyqioZWpvykEL%2BRcx0UgSRoG%2B8R9tP8Yyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM7ieqqOdFwVSvXSHhKtwDg4BsjprWIactYEjhzgRxmrJeIxvjD4Jrorq5QtSPuhOSRm0A0Dm8T718EeWvSFhYVPXbfyTJ9iTLS8tZYXOXY6SXB5%2FPN%2FpFm2Z2byxhFa5eCzCVcrKLPqwIsagFzD4oIMNw3ndPVarOEHX%2FTG3k5cxjwbv8qfIJtkRvCgFSGb%2BUkuS5cwLwLcWG16MrF7buM%2F0wlwT9EoaQpF%2FTN3YOcbx3Bn6UjRdn4jN%2Bw1NHNjXDpb7zsbLUTKbFzH5M%2ByM%2FK9jmBupwgVEYUNOSfn7PTSWfLLSFsKt8QkOTR8rv8lk6PYL7i6S3fUxC19wPD5RHyXThEv7ps%2BwmaVRxxn8zrhyV29kTFZVBdiwDi64Q7Eu6Nlwg2LGYHUQSZ8J1b7cAXMLtdbxa4wvHm4aIdr1OVY2%2FS4zJmIlTA%2BJKBtf646QvME1CdmZZNsd8nUShmHhMm8gXtfxIycph54G9b5CGNPay8d5nYIkb0OJxeE9Z91G%2FP9IQueelT6PRjm3RwkPKGR6CxeRGPRC8Y5d1JfBjXg%2Bh0QHbuZCljnNtPj0m6Gz3lZCab4mt8n3%2Fg4C%2BGu%2BeABefYJH1shM80XroY6CP117v89PCSRCPgyIngjaDNeYBah%2BDGbZrGdgX8SUww9ekwQY6pgHQHQotXCV4MjyBTeF65hXnjia5L9K1Xzcr5Y9ke7IPgNIWnVFHox%2FllMFZB1eiGCwCwA1nU%2F5Z%2B6PdQhFHNT3fgzFfGG5QrR8LeXJsEp32sZGdp%2BfxOi%2ByazqRlJI5jXD0XKM%2Frw7QG7TmhVBrybyW6MJHRDMkau0EVjkqVyhQg%2B%2BgUzjJ%2BIMQsjos37pobPPNXTvHeR9NZstMCYBKVDmm0WWi4TDq&X-Amz-Signature=2f2948f74187b5ddf78a5fb4bf49ec99195d066bb052edfa2c8624b3de986635&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIWW7DC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYrT6eupi%2FX349sFNhkLK6j4mr0sXjlScdjglAOvVgIAiAqaBQgS%2BH0%2FxyqioZWpvykEL%2BRcx0UgSRoG%2B8R9tP8Yyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM7ieqqOdFwVSvXSHhKtwDg4BsjprWIactYEjhzgRxmrJeIxvjD4Jrorq5QtSPuhOSRm0A0Dm8T718EeWvSFhYVPXbfyTJ9iTLS8tZYXOXY6SXB5%2FPN%2FpFm2Z2byxhFa5eCzCVcrKLPqwIsagFzD4oIMNw3ndPVarOEHX%2FTG3k5cxjwbv8qfIJtkRvCgFSGb%2BUkuS5cwLwLcWG16MrF7buM%2F0wlwT9EoaQpF%2FTN3YOcbx3Bn6UjRdn4jN%2Bw1NHNjXDpb7zsbLUTKbFzH5M%2ByM%2FK9jmBupwgVEYUNOSfn7PTSWfLLSFsKt8QkOTR8rv8lk6PYL7i6S3fUxC19wPD5RHyXThEv7ps%2BwmaVRxxn8zrhyV29kTFZVBdiwDi64Q7Eu6Nlwg2LGYHUQSZ8J1b7cAXMLtdbxa4wvHm4aIdr1OVY2%2FS4zJmIlTA%2BJKBtf646QvME1CdmZZNsd8nUShmHhMm8gXtfxIycph54G9b5CGNPay8d5nYIkb0OJxeE9Z91G%2FP9IQueelT6PRjm3RwkPKGR6CxeRGPRC8Y5d1JfBjXg%2Bh0QHbuZCljnNtPj0m6Gz3lZCab4mt8n3%2Fg4C%2BGu%2BeABefYJH1shM80XroY6CP117v89PCSRCPgyIngjaDNeYBah%2BDGbZrGdgX8SUww9ekwQY6pgHQHQotXCV4MjyBTeF65hXnjia5L9K1Xzcr5Y9ke7IPgNIWnVFHox%2FllMFZB1eiGCwCwA1nU%2F5Z%2B6PdQhFHNT3fgzFfGG5QrR8LeXJsEp32sZGdp%2BfxOi%2ByazqRlJI5jXD0XKM%2Frw7QG7TmhVBrybyW6MJHRDMkau0EVjkqVyhQg%2B%2BgUzjJ%2BIMQsjos37pobPPNXTvHeR9NZstMCYBKVDmm0WWi4TDq&X-Amz-Signature=071d694ae51371943ab426e0be4ea24d73e33110ac091418bb587342cf44449e&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIWW7DC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYrT6eupi%2FX349sFNhkLK6j4mr0sXjlScdjglAOvVgIAiAqaBQgS%2BH0%2FxyqioZWpvykEL%2BRcx0UgSRoG%2B8R9tP8Yyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM7ieqqOdFwVSvXSHhKtwDg4BsjprWIactYEjhzgRxmrJeIxvjD4Jrorq5QtSPuhOSRm0A0Dm8T718EeWvSFhYVPXbfyTJ9iTLS8tZYXOXY6SXB5%2FPN%2FpFm2Z2byxhFa5eCzCVcrKLPqwIsagFzD4oIMNw3ndPVarOEHX%2FTG3k5cxjwbv8qfIJtkRvCgFSGb%2BUkuS5cwLwLcWG16MrF7buM%2F0wlwT9EoaQpF%2FTN3YOcbx3Bn6UjRdn4jN%2Bw1NHNjXDpb7zsbLUTKbFzH5M%2ByM%2FK9jmBupwgVEYUNOSfn7PTSWfLLSFsKt8QkOTR8rv8lk6PYL7i6S3fUxC19wPD5RHyXThEv7ps%2BwmaVRxxn8zrhyV29kTFZVBdiwDi64Q7Eu6Nlwg2LGYHUQSZ8J1b7cAXMLtdbxa4wvHm4aIdr1OVY2%2FS4zJmIlTA%2BJKBtf646QvME1CdmZZNsd8nUShmHhMm8gXtfxIycph54G9b5CGNPay8d5nYIkb0OJxeE9Z91G%2FP9IQueelT6PRjm3RwkPKGR6CxeRGPRC8Y5d1JfBjXg%2Bh0QHbuZCljnNtPj0m6Gz3lZCab4mt8n3%2Fg4C%2BGu%2BeABefYJH1shM80XroY6CP117v89PCSRCPgyIngjaDNeYBah%2BDGbZrGdgX8SUww9ekwQY6pgHQHQotXCV4MjyBTeF65hXnjia5L9K1Xzcr5Y9ke7IPgNIWnVFHox%2FllMFZB1eiGCwCwA1nU%2F5Z%2B6PdQhFHNT3fgzFfGG5QrR8LeXJsEp32sZGdp%2BfxOi%2ByazqRlJI5jXD0XKM%2Frw7QG7TmhVBrybyW6MJHRDMkau0EVjkqVyhQg%2B%2BgUzjJ%2BIMQsjos37pobPPNXTvHeR9NZstMCYBKVDmm0WWi4TDq&X-Amz-Signature=282035817f603fc572d0a373c55a0e726a5a9f45088865e73cb6b77544e2f1f1&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIWW7DC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYrT6eupi%2FX349sFNhkLK6j4mr0sXjlScdjglAOvVgIAiAqaBQgS%2BH0%2FxyqioZWpvykEL%2BRcx0UgSRoG%2B8R9tP8Yyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM7ieqqOdFwVSvXSHhKtwDg4BsjprWIactYEjhzgRxmrJeIxvjD4Jrorq5QtSPuhOSRm0A0Dm8T718EeWvSFhYVPXbfyTJ9iTLS8tZYXOXY6SXB5%2FPN%2FpFm2Z2byxhFa5eCzCVcrKLPqwIsagFzD4oIMNw3ndPVarOEHX%2FTG3k5cxjwbv8qfIJtkRvCgFSGb%2BUkuS5cwLwLcWG16MrF7buM%2F0wlwT9EoaQpF%2FTN3YOcbx3Bn6UjRdn4jN%2Bw1NHNjXDpb7zsbLUTKbFzH5M%2ByM%2FK9jmBupwgVEYUNOSfn7PTSWfLLSFsKt8QkOTR8rv8lk6PYL7i6S3fUxC19wPD5RHyXThEv7ps%2BwmaVRxxn8zrhyV29kTFZVBdiwDi64Q7Eu6Nlwg2LGYHUQSZ8J1b7cAXMLtdbxa4wvHm4aIdr1OVY2%2FS4zJmIlTA%2BJKBtf646QvME1CdmZZNsd8nUShmHhMm8gXtfxIycph54G9b5CGNPay8d5nYIkb0OJxeE9Z91G%2FP9IQueelT6PRjm3RwkPKGR6CxeRGPRC8Y5d1JfBjXg%2Bh0QHbuZCljnNtPj0m6Gz3lZCab4mt8n3%2Fg4C%2BGu%2BeABefYJH1shM80XroY6CP117v89PCSRCPgyIngjaDNeYBah%2BDGbZrGdgX8SUww9ekwQY6pgHQHQotXCV4MjyBTeF65hXnjia5L9K1Xzcr5Y9ke7IPgNIWnVFHox%2FllMFZB1eiGCwCwA1nU%2F5Z%2B6PdQhFHNT3fgzFfGG5QrR8LeXJsEp32sZGdp%2BfxOi%2ByazqRlJI5jXD0XKM%2Frw7QG7TmhVBrybyW6MJHRDMkau0EVjkqVyhQg%2B%2BgUzjJ%2BIMQsjos37pobPPNXTvHeR9NZstMCYBKVDmm0WWi4TDq&X-Amz-Signature=b2f7e3f5c28ae12c26e8c8b4b37235500655500297b4b2e1d7fc1edab49d26dd&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIWW7DC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYrT6eupi%2FX349sFNhkLK6j4mr0sXjlScdjglAOvVgIAiAqaBQgS%2BH0%2FxyqioZWpvykEL%2BRcx0UgSRoG%2B8R9tP8Yyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM7ieqqOdFwVSvXSHhKtwDg4BsjprWIactYEjhzgRxmrJeIxvjD4Jrorq5QtSPuhOSRm0A0Dm8T718EeWvSFhYVPXbfyTJ9iTLS8tZYXOXY6SXB5%2FPN%2FpFm2Z2byxhFa5eCzCVcrKLPqwIsagFzD4oIMNw3ndPVarOEHX%2FTG3k5cxjwbv8qfIJtkRvCgFSGb%2BUkuS5cwLwLcWG16MrF7buM%2F0wlwT9EoaQpF%2FTN3YOcbx3Bn6UjRdn4jN%2Bw1NHNjXDpb7zsbLUTKbFzH5M%2ByM%2FK9jmBupwgVEYUNOSfn7PTSWfLLSFsKt8QkOTR8rv8lk6PYL7i6S3fUxC19wPD5RHyXThEv7ps%2BwmaVRxxn8zrhyV29kTFZVBdiwDi64Q7Eu6Nlwg2LGYHUQSZ8J1b7cAXMLtdbxa4wvHm4aIdr1OVY2%2FS4zJmIlTA%2BJKBtf646QvME1CdmZZNsd8nUShmHhMm8gXtfxIycph54G9b5CGNPay8d5nYIkb0OJxeE9Z91G%2FP9IQueelT6PRjm3RwkPKGR6CxeRGPRC8Y5d1JfBjXg%2Bh0QHbuZCljnNtPj0m6Gz3lZCab4mt8n3%2Fg4C%2BGu%2BeABefYJH1shM80XroY6CP117v89PCSRCPgyIngjaDNeYBah%2BDGbZrGdgX8SUww9ekwQY6pgHQHQotXCV4MjyBTeF65hXnjia5L9K1Xzcr5Y9ke7IPgNIWnVFHox%2FllMFZB1eiGCwCwA1nU%2F5Z%2B6PdQhFHNT3fgzFfGG5QrR8LeXJsEp32sZGdp%2BfxOi%2ByazqRlJI5jXD0XKM%2Frw7QG7TmhVBrybyW6MJHRDMkau0EVjkqVyhQg%2B%2BgUzjJ%2BIMQsjos37pobPPNXTvHeR9NZstMCYBKVDmm0WWi4TDq&X-Amz-Signature=1a44215b4b8adcd8ba0cab77a9b09f8525170ac36bd0a779979d949a55cc80d8&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WIWW7DC%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYrT6eupi%2FX349sFNhkLK6j4mr0sXjlScdjglAOvVgIAiAqaBQgS%2BH0%2FxyqioZWpvykEL%2BRcx0UgSRoG%2B8R9tP8Yyr%2FAwhqEAAaDDYzNzQyMzE4MzgwNSIM7ieqqOdFwVSvXSHhKtwDg4BsjprWIactYEjhzgRxmrJeIxvjD4Jrorq5QtSPuhOSRm0A0Dm8T718EeWvSFhYVPXbfyTJ9iTLS8tZYXOXY6SXB5%2FPN%2FpFm2Z2byxhFa5eCzCVcrKLPqwIsagFzD4oIMNw3ndPVarOEHX%2FTG3k5cxjwbv8qfIJtkRvCgFSGb%2BUkuS5cwLwLcWG16MrF7buM%2F0wlwT9EoaQpF%2FTN3YOcbx3Bn6UjRdn4jN%2Bw1NHNjXDpb7zsbLUTKbFzH5M%2ByM%2FK9jmBupwgVEYUNOSfn7PTSWfLLSFsKt8QkOTR8rv8lk6PYL7i6S3fUxC19wPD5RHyXThEv7ps%2BwmaVRxxn8zrhyV29kTFZVBdiwDi64Q7Eu6Nlwg2LGYHUQSZ8J1b7cAXMLtdbxa4wvHm4aIdr1OVY2%2FS4zJmIlTA%2BJKBtf646QvME1CdmZZNsd8nUShmHhMm8gXtfxIycph54G9b5CGNPay8d5nYIkb0OJxeE9Z91G%2FP9IQueelT6PRjm3RwkPKGR6CxeRGPRC8Y5d1JfBjXg%2Bh0QHbuZCljnNtPj0m6Gz3lZCab4mt8n3%2Fg4C%2BGu%2BeABefYJH1shM80XroY6CP117v89PCSRCPgyIngjaDNeYBah%2BDGbZrGdgX8SUww9ekwQY6pgHQHQotXCV4MjyBTeF65hXnjia5L9K1Xzcr5Y9ke7IPgNIWnVFHox%2FllMFZB1eiGCwCwA1nU%2F5Z%2B6PdQhFHNT3fgzFfGG5QrR8LeXJsEp32sZGdp%2BfxOi%2ByazqRlJI5jXD0XKM%2Frw7QG7TmhVBrybyW6MJHRDMkau0EVjkqVyhQg%2B%2BgUzjJ%2BIMQsjos37pobPPNXTvHeR9NZstMCYBKVDmm0WWi4TDq&X-Amz-Signature=e33325dd1b6c60225522fc0efe242ac65235aa259845dfd6020168248b091506&X-Amz-SignedHeaders=host&x-id=GetObject)
