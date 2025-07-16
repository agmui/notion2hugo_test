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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665K4SRIJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHqNtDWl1d8bzkWnnCeYqrXIcZAESfR1bfQ660qCksGQAiEAiNnrt%2FJii7%2BHWcWruwB1SCu44fCRiB9zWUMXXflpNyQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIJzD5txbJ62xsMJJyrcA%2FPiP%2Bb%2BVFZn%2BljPCSfRno%2FcIswMdV1yCI0hhU6Vesa02xClv7MUgbjntd2hnkmE9peIM8VETR%2BzdBFKwusCd0rh0UUhY%2FelXmcQEWm03eBrHcy6bBb%2B7Ap1BZ6uQQPNCE4dFzQ4F9aZGCtk7XXaEqZcIoISajaK5AD3L9i1ayclW8xO5yCl00Fzklz%2FBz3J9BVM0VPvwpfjYGwahX9njngOMnCJeZPcON1jwfVF8mKVyo4Dv9y2o2tgzaD1aCyrR23zbKVo0ul3TnsQ7mu9BBp2Ouzh6IPg9MN47nZHBhrdrcE%2B%2F4HPn3TbFvZUthDbl9k%2B9zdAj8yhb4pUrk%2BH6PQteT%2FYYFjmiPvx4%2FBH3VDMGvXSXtBpJhZ%2B8irGH%2B9RNYEmqTPg2z%2FYWQ1b1VRpv2%2FOpQY9n8vH0KR51cHYR7iyqLrWdFotIO4X9Xlt71Inzk1OmBEJjUVzlIpgxUdOC60TX%2FznpdW5v4D0KoBxkVBtwxpf7lIo9VbhrzJXeXuy1aFkwNFqTifVQRIxV4G%2B82JqNyI3OlclW9w9%2B9djU7KmmxhLu0%2FRHZpUALPtC1OV0rGuMjULqMfa2YX7t7KSw39x%2F5iA%2Fza4JTEEoE9KrtxoewmN5GOw0ZJ4rc2fMNiT3sMGOqUBCBlP%2FtmYEurZaVPoqyfjrRpRivOen6VEARH%2Fsg9JCpTHSA%2BiVHPSMK87oSEWslUcieSwJ0duSDIKS%2FI1%2FRpsnm5QIWocMFKR24mTeQv35osrsAiVpHHxhu650yfgZ%2FzOTazM4B%2Fe1S9Wt2yaVkD2WofXiHEjHEuG2MXXiK9PGy8kDj%2BMb%2BIKPd1VlWedBZmXR7E8pp3L2DO4%2BSmT4E3KFuPisHTg&X-Amz-Signature=ada6d314e62cc2c5b2a4567d69b4a7bbd64c3457a1e78a6bee5ffe857ecca5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665K4SRIJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHqNtDWl1d8bzkWnnCeYqrXIcZAESfR1bfQ660qCksGQAiEAiNnrt%2FJii7%2BHWcWruwB1SCu44fCRiB9zWUMXXflpNyQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIJzD5txbJ62xsMJJyrcA%2FPiP%2Bb%2BVFZn%2BljPCSfRno%2FcIswMdV1yCI0hhU6Vesa02xClv7MUgbjntd2hnkmE9peIM8VETR%2BzdBFKwusCd0rh0UUhY%2FelXmcQEWm03eBrHcy6bBb%2B7Ap1BZ6uQQPNCE4dFzQ4F9aZGCtk7XXaEqZcIoISajaK5AD3L9i1ayclW8xO5yCl00Fzklz%2FBz3J9BVM0VPvwpfjYGwahX9njngOMnCJeZPcON1jwfVF8mKVyo4Dv9y2o2tgzaD1aCyrR23zbKVo0ul3TnsQ7mu9BBp2Ouzh6IPg9MN47nZHBhrdrcE%2B%2F4HPn3TbFvZUthDbl9k%2B9zdAj8yhb4pUrk%2BH6PQteT%2FYYFjmiPvx4%2FBH3VDMGvXSXtBpJhZ%2B8irGH%2B9RNYEmqTPg2z%2FYWQ1b1VRpv2%2FOpQY9n8vH0KR51cHYR7iyqLrWdFotIO4X9Xlt71Inzk1OmBEJjUVzlIpgxUdOC60TX%2FznpdW5v4D0KoBxkVBtwxpf7lIo9VbhrzJXeXuy1aFkwNFqTifVQRIxV4G%2B82JqNyI3OlclW9w9%2B9djU7KmmxhLu0%2FRHZpUALPtC1OV0rGuMjULqMfa2YX7t7KSw39x%2F5iA%2Fza4JTEEoE9KrtxoewmN5GOw0ZJ4rc2fMNiT3sMGOqUBCBlP%2FtmYEurZaVPoqyfjrRpRivOen6VEARH%2Fsg9JCpTHSA%2BiVHPSMK87oSEWslUcieSwJ0duSDIKS%2FI1%2FRpsnm5QIWocMFKR24mTeQv35osrsAiVpHHxhu650yfgZ%2FzOTazM4B%2Fe1S9Wt2yaVkD2WofXiHEjHEuG2MXXiK9PGy8kDj%2BMb%2BIKPd1VlWedBZmXR7E8pp3L2DO4%2BSmT4E3KFuPisHTg&X-Amz-Signature=2d18fd7381ff3bcdca4c0be2526d1dcdf8f7112ddf3af037848f11a3205c9f82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665K4SRIJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHqNtDWl1d8bzkWnnCeYqrXIcZAESfR1bfQ660qCksGQAiEAiNnrt%2FJii7%2BHWcWruwB1SCu44fCRiB9zWUMXXflpNyQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIJzD5txbJ62xsMJJyrcA%2FPiP%2Bb%2BVFZn%2BljPCSfRno%2FcIswMdV1yCI0hhU6Vesa02xClv7MUgbjntd2hnkmE9peIM8VETR%2BzdBFKwusCd0rh0UUhY%2FelXmcQEWm03eBrHcy6bBb%2B7Ap1BZ6uQQPNCE4dFzQ4F9aZGCtk7XXaEqZcIoISajaK5AD3L9i1ayclW8xO5yCl00Fzklz%2FBz3J9BVM0VPvwpfjYGwahX9njngOMnCJeZPcON1jwfVF8mKVyo4Dv9y2o2tgzaD1aCyrR23zbKVo0ul3TnsQ7mu9BBp2Ouzh6IPg9MN47nZHBhrdrcE%2B%2F4HPn3TbFvZUthDbl9k%2B9zdAj8yhb4pUrk%2BH6PQteT%2FYYFjmiPvx4%2FBH3VDMGvXSXtBpJhZ%2B8irGH%2B9RNYEmqTPg2z%2FYWQ1b1VRpv2%2FOpQY9n8vH0KR51cHYR7iyqLrWdFotIO4X9Xlt71Inzk1OmBEJjUVzlIpgxUdOC60TX%2FznpdW5v4D0KoBxkVBtwxpf7lIo9VbhrzJXeXuy1aFkwNFqTifVQRIxV4G%2B82JqNyI3OlclW9w9%2B9djU7KmmxhLu0%2FRHZpUALPtC1OV0rGuMjULqMfa2YX7t7KSw39x%2F5iA%2Fza4JTEEoE9KrtxoewmN5GOw0ZJ4rc2fMNiT3sMGOqUBCBlP%2FtmYEurZaVPoqyfjrRpRivOen6VEARH%2Fsg9JCpTHSA%2BiVHPSMK87oSEWslUcieSwJ0duSDIKS%2FI1%2FRpsnm5QIWocMFKR24mTeQv35osrsAiVpHHxhu650yfgZ%2FzOTazM4B%2Fe1S9Wt2yaVkD2WofXiHEjHEuG2MXXiK9PGy8kDj%2BMb%2BIKPd1VlWedBZmXR7E8pp3L2DO4%2BSmT4E3KFuPisHTg&X-Amz-Signature=6cbc936d8ba27250efe50f405019736d937c2457b4414e7f82f8affb1ee73a1a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665K4SRIJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHqNtDWl1d8bzkWnnCeYqrXIcZAESfR1bfQ660qCksGQAiEAiNnrt%2FJii7%2BHWcWruwB1SCu44fCRiB9zWUMXXflpNyQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIJzD5txbJ62xsMJJyrcA%2FPiP%2Bb%2BVFZn%2BljPCSfRno%2FcIswMdV1yCI0hhU6Vesa02xClv7MUgbjntd2hnkmE9peIM8VETR%2BzdBFKwusCd0rh0UUhY%2FelXmcQEWm03eBrHcy6bBb%2B7Ap1BZ6uQQPNCE4dFzQ4F9aZGCtk7XXaEqZcIoISajaK5AD3L9i1ayclW8xO5yCl00Fzklz%2FBz3J9BVM0VPvwpfjYGwahX9njngOMnCJeZPcON1jwfVF8mKVyo4Dv9y2o2tgzaD1aCyrR23zbKVo0ul3TnsQ7mu9BBp2Ouzh6IPg9MN47nZHBhrdrcE%2B%2F4HPn3TbFvZUthDbl9k%2B9zdAj8yhb4pUrk%2BH6PQteT%2FYYFjmiPvx4%2FBH3VDMGvXSXtBpJhZ%2B8irGH%2B9RNYEmqTPg2z%2FYWQ1b1VRpv2%2FOpQY9n8vH0KR51cHYR7iyqLrWdFotIO4X9Xlt71Inzk1OmBEJjUVzlIpgxUdOC60TX%2FznpdW5v4D0KoBxkVBtwxpf7lIo9VbhrzJXeXuy1aFkwNFqTifVQRIxV4G%2B82JqNyI3OlclW9w9%2B9djU7KmmxhLu0%2FRHZpUALPtC1OV0rGuMjULqMfa2YX7t7KSw39x%2F5iA%2Fza4JTEEoE9KrtxoewmN5GOw0ZJ4rc2fMNiT3sMGOqUBCBlP%2FtmYEurZaVPoqyfjrRpRivOen6VEARH%2Fsg9JCpTHSA%2BiVHPSMK87oSEWslUcieSwJ0duSDIKS%2FI1%2FRpsnm5QIWocMFKR24mTeQv35osrsAiVpHHxhu650yfgZ%2FzOTazM4B%2Fe1S9Wt2yaVkD2WofXiHEjHEuG2MXXiK9PGy8kDj%2BMb%2BIKPd1VlWedBZmXR7E8pp3L2DO4%2BSmT4E3KFuPisHTg&X-Amz-Signature=edbd78dfda948d78bb51d2543639f87f62c3db686a6513fe41d21882d29b06d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665K4SRIJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHqNtDWl1d8bzkWnnCeYqrXIcZAESfR1bfQ660qCksGQAiEAiNnrt%2FJii7%2BHWcWruwB1SCu44fCRiB9zWUMXXflpNyQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIJzD5txbJ62xsMJJyrcA%2FPiP%2Bb%2BVFZn%2BljPCSfRno%2FcIswMdV1yCI0hhU6Vesa02xClv7MUgbjntd2hnkmE9peIM8VETR%2BzdBFKwusCd0rh0UUhY%2FelXmcQEWm03eBrHcy6bBb%2B7Ap1BZ6uQQPNCE4dFzQ4F9aZGCtk7XXaEqZcIoISajaK5AD3L9i1ayclW8xO5yCl00Fzklz%2FBz3J9BVM0VPvwpfjYGwahX9njngOMnCJeZPcON1jwfVF8mKVyo4Dv9y2o2tgzaD1aCyrR23zbKVo0ul3TnsQ7mu9BBp2Ouzh6IPg9MN47nZHBhrdrcE%2B%2F4HPn3TbFvZUthDbl9k%2B9zdAj8yhb4pUrk%2BH6PQteT%2FYYFjmiPvx4%2FBH3VDMGvXSXtBpJhZ%2B8irGH%2B9RNYEmqTPg2z%2FYWQ1b1VRpv2%2FOpQY9n8vH0KR51cHYR7iyqLrWdFotIO4X9Xlt71Inzk1OmBEJjUVzlIpgxUdOC60TX%2FznpdW5v4D0KoBxkVBtwxpf7lIo9VbhrzJXeXuy1aFkwNFqTifVQRIxV4G%2B82JqNyI3OlclW9w9%2B9djU7KmmxhLu0%2FRHZpUALPtC1OV0rGuMjULqMfa2YX7t7KSw39x%2F5iA%2Fza4JTEEoE9KrtxoewmN5GOw0ZJ4rc2fMNiT3sMGOqUBCBlP%2FtmYEurZaVPoqyfjrRpRivOen6VEARH%2Fsg9JCpTHSA%2BiVHPSMK87oSEWslUcieSwJ0duSDIKS%2FI1%2FRpsnm5QIWocMFKR24mTeQv35osrsAiVpHHxhu650yfgZ%2FzOTazM4B%2Fe1S9Wt2yaVkD2WofXiHEjHEuG2MXXiK9PGy8kDj%2BMb%2BIKPd1VlWedBZmXR7E8pp3L2DO4%2BSmT4E3KFuPisHTg&X-Amz-Signature=084088d48a99111597cc05fffd8ca2ee7824bc02468a35a7aa650c0860633dc5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665K4SRIJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T121810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIHqNtDWl1d8bzkWnnCeYqrXIcZAESfR1bfQ660qCksGQAiEAiNnrt%2FJii7%2BHWcWruwB1SCu44fCRiB9zWUMXXflpNyQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDIJzD5txbJ62xsMJJyrcA%2FPiP%2Bb%2BVFZn%2BljPCSfRno%2FcIswMdV1yCI0hhU6Vesa02xClv7MUgbjntd2hnkmE9peIM8VETR%2BzdBFKwusCd0rh0UUhY%2FelXmcQEWm03eBrHcy6bBb%2B7Ap1BZ6uQQPNCE4dFzQ4F9aZGCtk7XXaEqZcIoISajaK5AD3L9i1ayclW8xO5yCl00Fzklz%2FBz3J9BVM0VPvwpfjYGwahX9njngOMnCJeZPcON1jwfVF8mKVyo4Dv9y2o2tgzaD1aCyrR23zbKVo0ul3TnsQ7mu9BBp2Ouzh6IPg9MN47nZHBhrdrcE%2B%2F4HPn3TbFvZUthDbl9k%2B9zdAj8yhb4pUrk%2BH6PQteT%2FYYFjmiPvx4%2FBH3VDMGvXSXtBpJhZ%2B8irGH%2B9RNYEmqTPg2z%2FYWQ1b1VRpv2%2FOpQY9n8vH0KR51cHYR7iyqLrWdFotIO4X9Xlt71Inzk1OmBEJjUVzlIpgxUdOC60TX%2FznpdW5v4D0KoBxkVBtwxpf7lIo9VbhrzJXeXuy1aFkwNFqTifVQRIxV4G%2B82JqNyI3OlclW9w9%2B9djU7KmmxhLu0%2FRHZpUALPtC1OV0rGuMjULqMfa2YX7t7KSw39x%2F5iA%2Fza4JTEEoE9KrtxoewmN5GOw0ZJ4rc2fMNiT3sMGOqUBCBlP%2FtmYEurZaVPoqyfjrRpRivOen6VEARH%2Fsg9JCpTHSA%2BiVHPSMK87oSEWslUcieSwJ0duSDIKS%2FI1%2FRpsnm5QIWocMFKR24mTeQv35osrsAiVpHHxhu650yfgZ%2FzOTazM4B%2Fe1S9Wt2yaVkD2WofXiHEjHEuG2MXXiK9PGy8kDj%2BMb%2BIKPd1VlWedBZmXR7E8pp3L2DO4%2BSmT4E3KFuPisHTg&X-Amz-Signature=1cb65f16746e53944d67c855edfec24cc0df0824a9df96383b81a3a5af7ff09d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
