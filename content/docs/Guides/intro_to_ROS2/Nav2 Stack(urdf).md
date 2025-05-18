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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=2e6a733e68b1c370749902d44bd8e1881de9a867a4eba3e9198d9c51ce6e1b7b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=b6743caee883b98ac2794ee004ee21283ac8fb4e088d54397bbdd0931d4d7c6c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=42304008dbfe80960f5c00e94743b7df6284fa474d3e24758928225953657681&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=50cbd2067c251eea1ac4bd2ff044e8ed3a0f9c4045b3d9c22824f021d6b9a5e9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=3281609df24b2bc793f2d34ac88e70d66eb790316b82e16fcee0fd96e8161692&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWP7Z4B2%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T121410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3to2Dnc3L9mGOke4EyI3uJx%2FrKrbjDrwRd%2FduLkvMggIhAP2YocoZcSwPchxzYdeHT9jc46OU9XbMJNqecGKRQtWCKv8DCG8QABoMNjM3NDIzMTgzODA1Igz0a0V7alku6B3SCIoq3APicwpDdoPOKANAplTTXjqBFnkWBXvcAhnkKcsA05Pk2T4rKBVdSRJlwna4McGfdxFzDM4PAoV3lgnmZwhjqoacKYCk6pm581BGGQaWO527ox3hXw%2Buo1lELToPcPxFZasX7Hpb6qWzmLCqtzFn1SM%2BC%2FmlUjMYr7VQCEpqgZ9XLDGVJY1Hr%2BvkHjO4GgNpG3bvWcSd9ltcGsclpyCSfV5y2FU%2FQSDTCRBgNc90S8M%2FtZpAH5H4ODvISVYauRIBgKwaa3tvOxrICNDCqKK4VZL53RDDnUjAZUaisxS%2Bo6sAvsJfBu04tn%2FP6OvXeVtrlMz%2FKBYsH8%2B7IaY8clwsqJFCsjze6R38STYQrH%2FB9CgPzyiCLc6YKWsTSRRJ0k6ZgolN7Ezii8V4tmZIKLD9FD2A0E5Yz2oXaFxdx18O5rnw9LvBWL6PUAgkH%2BncSgQkaqS%2Fk8YGTFOMqIGC54qjUEBK5YNSDlT7hK5GcepJmhpMoQsrg6MCk9B9Qjef0IOiEJHqlisPEQlR%2FKbg7tHen1j3R9wcr7D365xLm4KPTpIdURGHhFDTfCwtd7%2FyPtH22UN09a9bHwJGrRzZBsLZBhyqPKFxS%2F6mA%2FBgF7nFU%2FQ1ljFr4iID3pAGSa8OvTCi%2BKXBBjqkAf5IUcVUHJJhwJq6L6GiQWbhA2BuN2nVEh5olzIY%2FMFmsqnSFiGBCSvzcuLiNk%2B8mM%2FkfgrTvP%2FsfOGgxmLwNOUnRZTH9Vb%2FAqrXsE%2BvoaMjdvVP%2FImqa9F1Y4mA17bEjqqhGT6Ni7uBPAni70Y9lu4BP70eb6rmemkq51T97Cdhl%2BTgOvrJivc58e0co7%2B%2BhHOZmBEXLVaG0TiGUHxJyKHM08pm&X-Amz-Signature=d8878453fbb13565c5b9ae85265f7ed0809ef6dce9470b60738c6c7c9d4a74f3&X-Amz-SignedHeaders=host&x-id=GetObject)
