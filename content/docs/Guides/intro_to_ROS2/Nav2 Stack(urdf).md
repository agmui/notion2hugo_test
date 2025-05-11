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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5H5DLLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGI3ykLDc538VlxaoF6yVDuu7TjJP7gIVbFry30m0dnmAiAE553W2GUtCcHGWLWfiiO276sCaxCTKOxboaQeYqjtCCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmTaiXdcjTXSeqIRKtwDljiFY9moKd2PRzV1OclCySaWXB6KEVWiUVqmqOLB7SdVyF7vkS0WY05PGg5iZV2QDHCg67EFLkrGwR7D75KSfLYs9NhwXjfEWrSnp04F4UuztaFg%2BoE3%2BP%2BUD1QgMauXw4b2YpdoaxaZ%2B3MDdleJCBtLUzd4jZqEsaobgBfqwjLgA2JvuBSo3CaVvYdPuutMZ%2BQB9GvyOcAPUL3hq%2BcfbGVZ6vG1w2jXvgj6FwiPfeh%2BAjr%2BAq6T3%2B6pWiIuhMhzFlPnI1zvMpDXNBJU8URAibrP03iJiiLiX5o4M2rrowo58dRKado8KW%2F5dU7oXGcnLIvcWiFYye7Yb5eTtDcAuK34GZFKyyWddZHv%2F0NrTGI7O8Z9K0Dj9IKPNLU8%2BZkB1uPgSm1%2B4o695s0Y4aqq%2BB%2F3hjjt8%2Fuvcn43Kv7CETE36556c2pFSKCFEh9P28a%2BFh5qv7TPgNWtYMAMuDXu5pWixKR095aXFUGPbBiuQux1JrnyTlqEOVxpgSMbaXezNj0nZVXxJX9jMsG6bJcTfS9XWIR%2F3Ceygp7H4BOHJOGIKmY7r0KUjtbtlnxO%2FNC1pAxyeAEjLWTf4sFIDsxvnURLx%2BAYKyuc5n34HfFJcn0OMsik15%2B8E%2FxrvdUwjLuEwQY6pgGvq6H%2BLO0%2BjzgTMjHCwGagX6uhpNmW6uWzlkd6XhAkQmljlhIBg%2BnZRKu3jrdB2AmD35MszYgLG1YVmLtBSbAi5QSvuxOFCRMDMGVkKf1zWaqbtiiUd0r8wccgeoeYVNNwQVQlcTtlbd%2F72CUyDiZ8Bccvv3PvlK97QHTju8wUeqFxM%2B1TtobQlQsCB%2FPX9UHEa8T7Cp1IqNX92tIwHPH7KWspxyet&X-Amz-Signature=0839c55c8aa84912e9a44736a2f427b115f075f50fb74262e55be77b998bc751&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5H5DLLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGI3ykLDc538VlxaoF6yVDuu7TjJP7gIVbFry30m0dnmAiAE553W2GUtCcHGWLWfiiO276sCaxCTKOxboaQeYqjtCCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmTaiXdcjTXSeqIRKtwDljiFY9moKd2PRzV1OclCySaWXB6KEVWiUVqmqOLB7SdVyF7vkS0WY05PGg5iZV2QDHCg67EFLkrGwR7D75KSfLYs9NhwXjfEWrSnp04F4UuztaFg%2BoE3%2BP%2BUD1QgMauXw4b2YpdoaxaZ%2B3MDdleJCBtLUzd4jZqEsaobgBfqwjLgA2JvuBSo3CaVvYdPuutMZ%2BQB9GvyOcAPUL3hq%2BcfbGVZ6vG1w2jXvgj6FwiPfeh%2BAjr%2BAq6T3%2B6pWiIuhMhzFlPnI1zvMpDXNBJU8URAibrP03iJiiLiX5o4M2rrowo58dRKado8KW%2F5dU7oXGcnLIvcWiFYye7Yb5eTtDcAuK34GZFKyyWddZHv%2F0NrTGI7O8Z9K0Dj9IKPNLU8%2BZkB1uPgSm1%2B4o695s0Y4aqq%2BB%2F3hjjt8%2Fuvcn43Kv7CETE36556c2pFSKCFEh9P28a%2BFh5qv7TPgNWtYMAMuDXu5pWixKR095aXFUGPbBiuQux1JrnyTlqEOVxpgSMbaXezNj0nZVXxJX9jMsG6bJcTfS9XWIR%2F3Ceygp7H4BOHJOGIKmY7r0KUjtbtlnxO%2FNC1pAxyeAEjLWTf4sFIDsxvnURLx%2BAYKyuc5n34HfFJcn0OMsik15%2B8E%2FxrvdUwjLuEwQY6pgGvq6H%2BLO0%2BjzgTMjHCwGagX6uhpNmW6uWzlkd6XhAkQmljlhIBg%2BnZRKu3jrdB2AmD35MszYgLG1YVmLtBSbAi5QSvuxOFCRMDMGVkKf1zWaqbtiiUd0r8wccgeoeYVNNwQVQlcTtlbd%2F72CUyDiZ8Bccvv3PvlK97QHTju8wUeqFxM%2B1TtobQlQsCB%2FPX9UHEa8T7Cp1IqNX92tIwHPH7KWspxyet&X-Amz-Signature=412a654110afa535d2a48af8791af61605791b57345dfad72afc118d5490f2d4&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5H5DLLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGI3ykLDc538VlxaoF6yVDuu7TjJP7gIVbFry30m0dnmAiAE553W2GUtCcHGWLWfiiO276sCaxCTKOxboaQeYqjtCCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmTaiXdcjTXSeqIRKtwDljiFY9moKd2PRzV1OclCySaWXB6KEVWiUVqmqOLB7SdVyF7vkS0WY05PGg5iZV2QDHCg67EFLkrGwR7D75KSfLYs9NhwXjfEWrSnp04F4UuztaFg%2BoE3%2BP%2BUD1QgMauXw4b2YpdoaxaZ%2B3MDdleJCBtLUzd4jZqEsaobgBfqwjLgA2JvuBSo3CaVvYdPuutMZ%2BQB9GvyOcAPUL3hq%2BcfbGVZ6vG1w2jXvgj6FwiPfeh%2BAjr%2BAq6T3%2B6pWiIuhMhzFlPnI1zvMpDXNBJU8URAibrP03iJiiLiX5o4M2rrowo58dRKado8KW%2F5dU7oXGcnLIvcWiFYye7Yb5eTtDcAuK34GZFKyyWddZHv%2F0NrTGI7O8Z9K0Dj9IKPNLU8%2BZkB1uPgSm1%2B4o695s0Y4aqq%2BB%2F3hjjt8%2Fuvcn43Kv7CETE36556c2pFSKCFEh9P28a%2BFh5qv7TPgNWtYMAMuDXu5pWixKR095aXFUGPbBiuQux1JrnyTlqEOVxpgSMbaXezNj0nZVXxJX9jMsG6bJcTfS9XWIR%2F3Ceygp7H4BOHJOGIKmY7r0KUjtbtlnxO%2FNC1pAxyeAEjLWTf4sFIDsxvnURLx%2BAYKyuc5n34HfFJcn0OMsik15%2B8E%2FxrvdUwjLuEwQY6pgGvq6H%2BLO0%2BjzgTMjHCwGagX6uhpNmW6uWzlkd6XhAkQmljlhIBg%2BnZRKu3jrdB2AmD35MszYgLG1YVmLtBSbAi5QSvuxOFCRMDMGVkKf1zWaqbtiiUd0r8wccgeoeYVNNwQVQlcTtlbd%2F72CUyDiZ8Bccvv3PvlK97QHTju8wUeqFxM%2B1TtobQlQsCB%2FPX9UHEa8T7Cp1IqNX92tIwHPH7KWspxyet&X-Amz-Signature=b5674192bcfe2615d773f0273981e4469e3c725d201053d8a3f75b88841cf7cd&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5H5DLLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGI3ykLDc538VlxaoF6yVDuu7TjJP7gIVbFry30m0dnmAiAE553W2GUtCcHGWLWfiiO276sCaxCTKOxboaQeYqjtCCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmTaiXdcjTXSeqIRKtwDljiFY9moKd2PRzV1OclCySaWXB6KEVWiUVqmqOLB7SdVyF7vkS0WY05PGg5iZV2QDHCg67EFLkrGwR7D75KSfLYs9NhwXjfEWrSnp04F4UuztaFg%2BoE3%2BP%2BUD1QgMauXw4b2YpdoaxaZ%2B3MDdleJCBtLUzd4jZqEsaobgBfqwjLgA2JvuBSo3CaVvYdPuutMZ%2BQB9GvyOcAPUL3hq%2BcfbGVZ6vG1w2jXvgj6FwiPfeh%2BAjr%2BAq6T3%2B6pWiIuhMhzFlPnI1zvMpDXNBJU8URAibrP03iJiiLiX5o4M2rrowo58dRKado8KW%2F5dU7oXGcnLIvcWiFYye7Yb5eTtDcAuK34GZFKyyWddZHv%2F0NrTGI7O8Z9K0Dj9IKPNLU8%2BZkB1uPgSm1%2B4o695s0Y4aqq%2BB%2F3hjjt8%2Fuvcn43Kv7CETE36556c2pFSKCFEh9P28a%2BFh5qv7TPgNWtYMAMuDXu5pWixKR095aXFUGPbBiuQux1JrnyTlqEOVxpgSMbaXezNj0nZVXxJX9jMsG6bJcTfS9XWIR%2F3Ceygp7H4BOHJOGIKmY7r0KUjtbtlnxO%2FNC1pAxyeAEjLWTf4sFIDsxvnURLx%2BAYKyuc5n34HfFJcn0OMsik15%2B8E%2FxrvdUwjLuEwQY6pgGvq6H%2BLO0%2BjzgTMjHCwGagX6uhpNmW6uWzlkd6XhAkQmljlhIBg%2BnZRKu3jrdB2AmD35MszYgLG1YVmLtBSbAi5QSvuxOFCRMDMGVkKf1zWaqbtiiUd0r8wccgeoeYVNNwQVQlcTtlbd%2F72CUyDiZ8Bccvv3PvlK97QHTju8wUeqFxM%2B1TtobQlQsCB%2FPX9UHEa8T7Cp1IqNX92tIwHPH7KWspxyet&X-Amz-Signature=dcfd1c859ff7c39a2e638e8ee8acce59ef610f7960f9a30c8bd04d5253575e7e&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5H5DLLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGI3ykLDc538VlxaoF6yVDuu7TjJP7gIVbFry30m0dnmAiAE553W2GUtCcHGWLWfiiO276sCaxCTKOxboaQeYqjtCCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmTaiXdcjTXSeqIRKtwDljiFY9moKd2PRzV1OclCySaWXB6KEVWiUVqmqOLB7SdVyF7vkS0WY05PGg5iZV2QDHCg67EFLkrGwR7D75KSfLYs9NhwXjfEWrSnp04F4UuztaFg%2BoE3%2BP%2BUD1QgMauXw4b2YpdoaxaZ%2B3MDdleJCBtLUzd4jZqEsaobgBfqwjLgA2JvuBSo3CaVvYdPuutMZ%2BQB9GvyOcAPUL3hq%2BcfbGVZ6vG1w2jXvgj6FwiPfeh%2BAjr%2BAq6T3%2B6pWiIuhMhzFlPnI1zvMpDXNBJU8URAibrP03iJiiLiX5o4M2rrowo58dRKado8KW%2F5dU7oXGcnLIvcWiFYye7Yb5eTtDcAuK34GZFKyyWddZHv%2F0NrTGI7O8Z9K0Dj9IKPNLU8%2BZkB1uPgSm1%2B4o695s0Y4aqq%2BB%2F3hjjt8%2Fuvcn43Kv7CETE36556c2pFSKCFEh9P28a%2BFh5qv7TPgNWtYMAMuDXu5pWixKR095aXFUGPbBiuQux1JrnyTlqEOVxpgSMbaXezNj0nZVXxJX9jMsG6bJcTfS9XWIR%2F3Ceygp7H4BOHJOGIKmY7r0KUjtbtlnxO%2FNC1pAxyeAEjLWTf4sFIDsxvnURLx%2BAYKyuc5n34HfFJcn0OMsik15%2B8E%2FxrvdUwjLuEwQY6pgGvq6H%2BLO0%2BjzgTMjHCwGagX6uhpNmW6uWzlkd6XhAkQmljlhIBg%2BnZRKu3jrdB2AmD35MszYgLG1YVmLtBSbAi5QSvuxOFCRMDMGVkKf1zWaqbtiiUd0r8wccgeoeYVNNwQVQlcTtlbd%2F72CUyDiZ8Bccvv3PvlK97QHTju8wUeqFxM%2B1TtobQlQsCB%2FPX9UHEa8T7Cp1IqNX92tIwHPH7KWspxyet&X-Amz-Signature=54f257838cd80911226e12cb6cbfc92bffe7015690cb3628fde6a9a258617c8a&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X5H5DLLS%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCIGI3ykLDc538VlxaoF6yVDuu7TjJP7gIVbFry30m0dnmAiAE553W2GUtCcHGWLWfiiO276sCaxCTKOxboaQeYqjtCCqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOmTaiXdcjTXSeqIRKtwDljiFY9moKd2PRzV1OclCySaWXB6KEVWiUVqmqOLB7SdVyF7vkS0WY05PGg5iZV2QDHCg67EFLkrGwR7D75KSfLYs9NhwXjfEWrSnp04F4UuztaFg%2BoE3%2BP%2BUD1QgMauXw4b2YpdoaxaZ%2B3MDdleJCBtLUzd4jZqEsaobgBfqwjLgA2JvuBSo3CaVvYdPuutMZ%2BQB9GvyOcAPUL3hq%2BcfbGVZ6vG1w2jXvgj6FwiPfeh%2BAjr%2BAq6T3%2B6pWiIuhMhzFlPnI1zvMpDXNBJU8URAibrP03iJiiLiX5o4M2rrowo58dRKado8KW%2F5dU7oXGcnLIvcWiFYye7Yb5eTtDcAuK34GZFKyyWddZHv%2F0NrTGI7O8Z9K0Dj9IKPNLU8%2BZkB1uPgSm1%2B4o695s0Y4aqq%2BB%2F3hjjt8%2Fuvcn43Kv7CETE36556c2pFSKCFEh9P28a%2BFh5qv7TPgNWtYMAMuDXu5pWixKR095aXFUGPbBiuQux1JrnyTlqEOVxpgSMbaXezNj0nZVXxJX9jMsG6bJcTfS9XWIR%2F3Ceygp7H4BOHJOGIKmY7r0KUjtbtlnxO%2FNC1pAxyeAEjLWTf4sFIDsxvnURLx%2BAYKyuc5n34HfFJcn0OMsik15%2B8E%2FxrvdUwjLuEwQY6pgGvq6H%2BLO0%2BjzgTMjHCwGagX6uhpNmW6uWzlkd6XhAkQmljlhIBg%2BnZRKu3jrdB2AmD35MszYgLG1YVmLtBSbAi5QSvuxOFCRMDMGVkKf1zWaqbtiiUd0r8wccgeoeYVNNwQVQlcTtlbd%2F72CUyDiZ8Bccvv3PvlK97QHTju8wUeqFxM%2B1TtobQlQsCB%2FPX9UHEa8T7Cp1IqNX92tIwHPH7KWspxyet&X-Amz-Signature=0991c70a175f5135ee5981cb6ba7924e9e450372dbe1701704632dedc3f3ed3a&X-Amz-SignedHeaders=host&x-id=GetObject)
