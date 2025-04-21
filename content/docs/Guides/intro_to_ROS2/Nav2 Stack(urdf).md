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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=675a722f31aeb1a81386ec1746bd025adb49b54fe60700ce1f3e34b451a6ac7f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=1f73c91b0364347200c923dee9e952b1449b231ec6b8383d98057d357afb2046&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=eaa820dcdc3626217ba2fb1e5978a1087e382deb37de3aebe43c535e9a4d5df2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=bc6148f0f12bee432efc43df878f695c15a8b49e07e0d7cb6978f34f8d3b9554&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=bc9c8f0658eed20332532deda650111fe0396df6d34341e9fa0dd3f517809158&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TRCZTLM5%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T022636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJHMEUCIF%2BfD71RN0%2BNA4PFlz1fOA3hq0FUp%2FbWZFqrz0FKJbfTAiEAyhJMfghQ2kmE2TQ%2BE2wzDNMz42L1pXR5P7CjxqEYQhsqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOZYuqtiWNhrYR8jlSrcA0ai%2FWXCcWEBNzmBtxbAUkxXHorKXOqXSXrylnUxNDDfU9S1fd0EVfwwElGuOdsmads3XSEKZfyy50gl%2BZoXacTAsOWJA7zoO0ET7a8MIYQs0kDqtE8U%2F2XqIF6JOkc5KB7471xFBOFfd0x90Rgw%2B2Ead0Z3kiGJCClLDkVTsXLOB97k%2FzGrq1dzbVW8CI0IDwpKNSX4Ly4R0RhGbsCB321PcvAUtxaLWjonG9cyl6wsBW0oh7fNeBfBgimP7mpvtU1rikgD5eMWKnyigwz8JNrWh%2BXoi5zefNS3kc%2FI23frYP0xs%2FO9Mzt3MgQraiTo54iHdnZXUWyquPXwxcQmlNoNoyc6zBjZ9qRozlbKS0YT9bd6QCTZKNXgJngWsp3xJe1xilzfhEyUsMUZe3J3N5%2BN5G4qAfXHLID6%2BseKaMuMExiHy1rF8pRKIJY1SfxEQVAHqh1WKRZBEvN7e8a3CXvsOXXZwlOevNFMR3rG3LR5XEiTXFcpXChJFyPeczcIxzKrxtoP%2BjpjQPyIxyK4puiZztskPM5dZeDiE0XmcN0l11X9XNdml%2BAuuDQ13r1e5PgfLB5jf1KYWDQjRTeYx05CXJpe7%2BbrjEGhs1qQWMfpD8nuVx9kr1Zk%2FKA2MM%2FblcAGOqUB55kCORfpkM7DJ8w3kdjD3OcrxhgrZkjoOQhn8DNip%2Bzhog9UWC2Td0RY1JngMVLAkL2MzL6KhMhPKM0B4dk9CGvMSZn7XGWc%2Fp0ZjQKH24e3QhOwLgTAhALPjikKcrko%2Fm%2FJVoQM%2FOUP%2FOAhbmwfBlW5bcz9GSmb0qqubulxefUi4HrErA%2BuNxV2q6BsDZUMLOXietQXuclzemJnNSs%2BA0B2Thr4&X-Amz-Signature=5482680ba0b2adc265cc84d39b0dec8db3c2d7f49c80cf204b4931b9079fb269&X-Amz-SignedHeaders=host&x-id=GetObject)
