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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HACK7SK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCtesbTcoH5nUSxIxtvEJypp3C6%2FouMwy2TqivoRTDBAwIgOEfI0ZZKpPsVlKnzzgE4sIBJpmzpzpQCg4NSMKJMDZwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv8%2Fr0UESDmSg%2BmvSrcAwrMFjGeWuER%2FbDqERYx03yMLTQ6g1KNWzwptYh3y9daKLRQmiXvcSzxFSWEOCKbIj%2FjRDWM7%2BGEvo2awvyJUIcdq3Kd8OnftGC4AoMq8BmyYyUcEYssiKReTQP6jIgQHxpRmbdZQMTqul5HHxvvsj4s%2FMhJaogm3WjplXT7gvhrWKBMnYYkMtN1NiTWF3fV9p8fMXI%2BdSBzqzXEb5xxNkHGnd988FEjJMnMkOnOx5WVPXS6hLaYs7DAg4LekhSHx9x6F9FXR71hSwH7hNm9njEN7w%2BVWfjmS69NqALYtXWnLc3AyWIiNEMEBtXf7UAVM1KHO57OOSms%2FBdAAyiRvWXGomH5iFRCyJrd7PfA38pyQfWoarxeAO4pFXBK4zs2odwmwBM1dUNktlX8mUtlo2ybxKwkVGFkWOZkRYDfi7P7G0ZEKBA8peoObK0BseRnEqKLhXKt8tBfZK2iomWEJmgUdJQ1H9r3Nm%2BPY1j80WuAEHGJzyKP9WmcStp7ubAhWSspgVuahhfWroxqFtnuAbacJOt9Fjbo2VAMi5yxXN68seQYlrXu100O0VaVkb3p2FExSydK00gHoWwXhAeqbl7gtCsao0pqrXjs5blF3WZe7Q0oJIHjaoJRS924MOTk6sMGOqUBZnc4Xs1NfUyclzlGecY3BvXSZgM12M7MjPDqFQOGR%2By28hCldfHqsJxe9hiOb2bdy%2BM6HRALcYBNbsl777xNFO7JjYIjqJ8J%2Fo5v2rWSKe3W3XmybQhafKeBinMHTyS0sgv35vCGkjTFT4WnmRSF%2FOcPtE57%2BO2JGqqXCkfADvfMPgQvN3nyOpxB3xnu%2B7iAY457%2FM2fVZ%2F8I1IyOcEXWTaFJxvc&X-Amz-Signature=8cb76212b3765bd1ce3adccf37c4f69246fbd9e31f16d5ed3178ce9db3fd1c4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HACK7SK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCtesbTcoH5nUSxIxtvEJypp3C6%2FouMwy2TqivoRTDBAwIgOEfI0ZZKpPsVlKnzzgE4sIBJpmzpzpQCg4NSMKJMDZwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv8%2Fr0UESDmSg%2BmvSrcAwrMFjGeWuER%2FbDqERYx03yMLTQ6g1KNWzwptYh3y9daKLRQmiXvcSzxFSWEOCKbIj%2FjRDWM7%2BGEvo2awvyJUIcdq3Kd8OnftGC4AoMq8BmyYyUcEYssiKReTQP6jIgQHxpRmbdZQMTqul5HHxvvsj4s%2FMhJaogm3WjplXT7gvhrWKBMnYYkMtN1NiTWF3fV9p8fMXI%2BdSBzqzXEb5xxNkHGnd988FEjJMnMkOnOx5WVPXS6hLaYs7DAg4LekhSHx9x6F9FXR71hSwH7hNm9njEN7w%2BVWfjmS69NqALYtXWnLc3AyWIiNEMEBtXf7UAVM1KHO57OOSms%2FBdAAyiRvWXGomH5iFRCyJrd7PfA38pyQfWoarxeAO4pFXBK4zs2odwmwBM1dUNktlX8mUtlo2ybxKwkVGFkWOZkRYDfi7P7G0ZEKBA8peoObK0BseRnEqKLhXKt8tBfZK2iomWEJmgUdJQ1H9r3Nm%2BPY1j80WuAEHGJzyKP9WmcStp7ubAhWSspgVuahhfWroxqFtnuAbacJOt9Fjbo2VAMi5yxXN68seQYlrXu100O0VaVkb3p2FExSydK00gHoWwXhAeqbl7gtCsao0pqrXjs5blF3WZe7Q0oJIHjaoJRS924MOTk6sMGOqUBZnc4Xs1NfUyclzlGecY3BvXSZgM12M7MjPDqFQOGR%2By28hCldfHqsJxe9hiOb2bdy%2BM6HRALcYBNbsl777xNFO7JjYIjqJ8J%2Fo5v2rWSKe3W3XmybQhafKeBinMHTyS0sgv35vCGkjTFT4WnmRSF%2FOcPtE57%2BO2JGqqXCkfADvfMPgQvN3nyOpxB3xnu%2B7iAY457%2FM2fVZ%2F8I1IyOcEXWTaFJxvc&X-Amz-Signature=94e153942cd613fac5c9eab6d65d362da82bb53fe9fbccd311d90ff26ec70702&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HACK7SK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCtesbTcoH5nUSxIxtvEJypp3C6%2FouMwy2TqivoRTDBAwIgOEfI0ZZKpPsVlKnzzgE4sIBJpmzpzpQCg4NSMKJMDZwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv8%2Fr0UESDmSg%2BmvSrcAwrMFjGeWuER%2FbDqERYx03yMLTQ6g1KNWzwptYh3y9daKLRQmiXvcSzxFSWEOCKbIj%2FjRDWM7%2BGEvo2awvyJUIcdq3Kd8OnftGC4AoMq8BmyYyUcEYssiKReTQP6jIgQHxpRmbdZQMTqul5HHxvvsj4s%2FMhJaogm3WjplXT7gvhrWKBMnYYkMtN1NiTWF3fV9p8fMXI%2BdSBzqzXEb5xxNkHGnd988FEjJMnMkOnOx5WVPXS6hLaYs7DAg4LekhSHx9x6F9FXR71hSwH7hNm9njEN7w%2BVWfjmS69NqALYtXWnLc3AyWIiNEMEBtXf7UAVM1KHO57OOSms%2FBdAAyiRvWXGomH5iFRCyJrd7PfA38pyQfWoarxeAO4pFXBK4zs2odwmwBM1dUNktlX8mUtlo2ybxKwkVGFkWOZkRYDfi7P7G0ZEKBA8peoObK0BseRnEqKLhXKt8tBfZK2iomWEJmgUdJQ1H9r3Nm%2BPY1j80WuAEHGJzyKP9WmcStp7ubAhWSspgVuahhfWroxqFtnuAbacJOt9Fjbo2VAMi5yxXN68seQYlrXu100O0VaVkb3p2FExSydK00gHoWwXhAeqbl7gtCsao0pqrXjs5blF3WZe7Q0oJIHjaoJRS924MOTk6sMGOqUBZnc4Xs1NfUyclzlGecY3BvXSZgM12M7MjPDqFQOGR%2By28hCldfHqsJxe9hiOb2bdy%2BM6HRALcYBNbsl777xNFO7JjYIjqJ8J%2Fo5v2rWSKe3W3XmybQhafKeBinMHTyS0sgv35vCGkjTFT4WnmRSF%2FOcPtE57%2BO2JGqqXCkfADvfMPgQvN3nyOpxB3xnu%2B7iAY457%2FM2fVZ%2F8I1IyOcEXWTaFJxvc&X-Amz-Signature=3c7cb7bbffd25f22fbc7bd8223fbd50afbe2e9b9f0a939580e274220c75afdb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HACK7SK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCtesbTcoH5nUSxIxtvEJypp3C6%2FouMwy2TqivoRTDBAwIgOEfI0ZZKpPsVlKnzzgE4sIBJpmzpzpQCg4NSMKJMDZwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv8%2Fr0UESDmSg%2BmvSrcAwrMFjGeWuER%2FbDqERYx03yMLTQ6g1KNWzwptYh3y9daKLRQmiXvcSzxFSWEOCKbIj%2FjRDWM7%2BGEvo2awvyJUIcdq3Kd8OnftGC4AoMq8BmyYyUcEYssiKReTQP6jIgQHxpRmbdZQMTqul5HHxvvsj4s%2FMhJaogm3WjplXT7gvhrWKBMnYYkMtN1NiTWF3fV9p8fMXI%2BdSBzqzXEb5xxNkHGnd988FEjJMnMkOnOx5WVPXS6hLaYs7DAg4LekhSHx9x6F9FXR71hSwH7hNm9njEN7w%2BVWfjmS69NqALYtXWnLc3AyWIiNEMEBtXf7UAVM1KHO57OOSms%2FBdAAyiRvWXGomH5iFRCyJrd7PfA38pyQfWoarxeAO4pFXBK4zs2odwmwBM1dUNktlX8mUtlo2ybxKwkVGFkWOZkRYDfi7P7G0ZEKBA8peoObK0BseRnEqKLhXKt8tBfZK2iomWEJmgUdJQ1H9r3Nm%2BPY1j80WuAEHGJzyKP9WmcStp7ubAhWSspgVuahhfWroxqFtnuAbacJOt9Fjbo2VAMi5yxXN68seQYlrXu100O0VaVkb3p2FExSydK00gHoWwXhAeqbl7gtCsao0pqrXjs5blF3WZe7Q0oJIHjaoJRS924MOTk6sMGOqUBZnc4Xs1NfUyclzlGecY3BvXSZgM12M7MjPDqFQOGR%2By28hCldfHqsJxe9hiOb2bdy%2BM6HRALcYBNbsl777xNFO7JjYIjqJ8J%2Fo5v2rWSKe3W3XmybQhafKeBinMHTyS0sgv35vCGkjTFT4WnmRSF%2FOcPtE57%2BO2JGqqXCkfADvfMPgQvN3nyOpxB3xnu%2B7iAY457%2FM2fVZ%2F8I1IyOcEXWTaFJxvc&X-Amz-Signature=bc2cb7284739edae773877a7e056b299ec6f09970a677864253ffe3eb21dd3f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HACK7SK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCtesbTcoH5nUSxIxtvEJypp3C6%2FouMwy2TqivoRTDBAwIgOEfI0ZZKpPsVlKnzzgE4sIBJpmzpzpQCg4NSMKJMDZwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv8%2Fr0UESDmSg%2BmvSrcAwrMFjGeWuER%2FbDqERYx03yMLTQ6g1KNWzwptYh3y9daKLRQmiXvcSzxFSWEOCKbIj%2FjRDWM7%2BGEvo2awvyJUIcdq3Kd8OnftGC4AoMq8BmyYyUcEYssiKReTQP6jIgQHxpRmbdZQMTqul5HHxvvsj4s%2FMhJaogm3WjplXT7gvhrWKBMnYYkMtN1NiTWF3fV9p8fMXI%2BdSBzqzXEb5xxNkHGnd988FEjJMnMkOnOx5WVPXS6hLaYs7DAg4LekhSHx9x6F9FXR71hSwH7hNm9njEN7w%2BVWfjmS69NqALYtXWnLc3AyWIiNEMEBtXf7UAVM1KHO57OOSms%2FBdAAyiRvWXGomH5iFRCyJrd7PfA38pyQfWoarxeAO4pFXBK4zs2odwmwBM1dUNktlX8mUtlo2ybxKwkVGFkWOZkRYDfi7P7G0ZEKBA8peoObK0BseRnEqKLhXKt8tBfZK2iomWEJmgUdJQ1H9r3Nm%2BPY1j80WuAEHGJzyKP9WmcStp7ubAhWSspgVuahhfWroxqFtnuAbacJOt9Fjbo2VAMi5yxXN68seQYlrXu100O0VaVkb3p2FExSydK00gHoWwXhAeqbl7gtCsao0pqrXjs5blF3WZe7Q0oJIHjaoJRS924MOTk6sMGOqUBZnc4Xs1NfUyclzlGecY3BvXSZgM12M7MjPDqFQOGR%2By28hCldfHqsJxe9hiOb2bdy%2BM6HRALcYBNbsl777xNFO7JjYIjqJ8J%2Fo5v2rWSKe3W3XmybQhafKeBinMHTyS0sgv35vCGkjTFT4WnmRSF%2FOcPtE57%2BO2JGqqXCkfADvfMPgQvN3nyOpxB3xnu%2B7iAY457%2FM2fVZ%2F8I1IyOcEXWTaFJxvc&X-Amz-Signature=fae196741e6f01f54a587c4fa1dcb58339ed6b9c1928dee2c6e333c80f5a0b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HACK7SK%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCtesbTcoH5nUSxIxtvEJypp3C6%2FouMwy2TqivoRTDBAwIgOEfI0ZZKpPsVlKnzzgE4sIBJpmzpzpQCg4NSMKJMDZwqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLv8%2Fr0UESDmSg%2BmvSrcAwrMFjGeWuER%2FbDqERYx03yMLTQ6g1KNWzwptYh3y9daKLRQmiXvcSzxFSWEOCKbIj%2FjRDWM7%2BGEvo2awvyJUIcdq3Kd8OnftGC4AoMq8BmyYyUcEYssiKReTQP6jIgQHxpRmbdZQMTqul5HHxvvsj4s%2FMhJaogm3WjplXT7gvhrWKBMnYYkMtN1NiTWF3fV9p8fMXI%2BdSBzqzXEb5xxNkHGnd988FEjJMnMkOnOx5WVPXS6hLaYs7DAg4LekhSHx9x6F9FXR71hSwH7hNm9njEN7w%2BVWfjmS69NqALYtXWnLc3AyWIiNEMEBtXf7UAVM1KHO57OOSms%2FBdAAyiRvWXGomH5iFRCyJrd7PfA38pyQfWoarxeAO4pFXBK4zs2odwmwBM1dUNktlX8mUtlo2ybxKwkVGFkWOZkRYDfi7P7G0ZEKBA8peoObK0BseRnEqKLhXKt8tBfZK2iomWEJmgUdJQ1H9r3Nm%2BPY1j80WuAEHGJzyKP9WmcStp7ubAhWSspgVuahhfWroxqFtnuAbacJOt9Fjbo2VAMi5yxXN68seQYlrXu100O0VaVkb3p2FExSydK00gHoWwXhAeqbl7gtCsao0pqrXjs5blF3WZe7Q0oJIHjaoJRS924MOTk6sMGOqUBZnc4Xs1NfUyclzlGecY3BvXSZgM12M7MjPDqFQOGR%2By28hCldfHqsJxe9hiOb2bdy%2BM6HRALcYBNbsl777xNFO7JjYIjqJ8J%2Fo5v2rWSKe3W3XmybQhafKeBinMHTyS0sgv35vCGkjTFT4WnmRSF%2FOcPtE57%2BO2JGqqXCkfADvfMPgQvN3nyOpxB3xnu%2B7iAY457%2FM2fVZ%2F8I1IyOcEXWTaFJxvc&X-Amz-Signature=64d21b1b5318f80bdb97e45e75b0dafe981225f9213f7328d3f01087c7c39ed8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
