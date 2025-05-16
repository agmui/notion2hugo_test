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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKOXCJJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1gNwmAJbiQU2QjdfUv4zxmx5MSxBKX1of7TlW5p2K7gIhAJz3JCiW1gUArizSYR3eQDG8IyEKG90YO4SJIqCZcW8OKv8DCFAQABoMNjM3NDIzMTgzODA1Igz5n1xSuJnX%2BOyvGsoq3AORm8Qp6rzvnvnSt48fEMJURK4eT0SRf20ucqem0AOhxF7H6WpdTiROhzkUXJCDDfZF%2B8R7tV4%2FunCehxLVxEp0ZLXGiHl0w6KPxIduWxt%2FUGD6i%2B12ywkGRC%2BFMBrA99m9fHYEcmpFf3nyBYBrjXbN2TBRPfuxtQKQAXEWUoUMn%2FCuAYbpkEFRlRU7%2Fl%2FlnyzfvCgpsDMMvabgRL6dzas%2FvxzM%2BggN3C8j1IKZM6e%2FYQMBFOhAdDOSc1CzQ25jPkeqflVfXlNRue0mwi759HX3qcnLYaWlXm%2BdSPYHKX8gycnNRdfWecfdapcSeeYBVcYarLQEKXqYD4Mu6ndC5sjx2XDsQcH13PEfy6xkIwak4eYerqIe69HOAdcFmyqb7zmUU11LDiMemc%2BJm%2BtpcyUvJLQTAQqMqebaapbQvwoWJK8HflJlVGLZZIi9CEp5JDSIOd6ttReF7q5y3ox6xPR%2BTSkxGvekGhXhKgKOtOKT%2BuXYObZzTiMWodzkoTrf5yUPYyb32yJ690LWf4FNyqsl3JJBm4ZZ3Xy2ewto1qa%2FbiyzPWitHOus%2FRVZgre081u7s6qpGkAhD2IR%2FprbtIsi%2BBF6%2Bbrx63ejbPAA6NmGgMaXIC0ThVzN%2BNRezTD9%2BJ7BBjqkAVd4ULVfnbuxJFGTgyDNTkG5IOItAX56nLcS%2B%2BsdmOaBiXfzfgZa8S5W0RDUTwoz9o37XYLs4Pf8AQJDjPvdF%2B4P8HRKmrE8yNgYtoAMqNtCcoKO3Vx7evE3G5et09kKLu0vJWLoElMipOC6m5rigsIpc7ElXmlpgMxKIsOaWkpOHIbWOPETQLsRlLdIafre7Fo88y98d1uSd5i%2FsFuZKeNJXG5V&X-Amz-Signature=22f1435256d037b6f97e584d2f7fa102cae7444cc0def46349ce49a4ceaa91bc&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKOXCJJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1gNwmAJbiQU2QjdfUv4zxmx5MSxBKX1of7TlW5p2K7gIhAJz3JCiW1gUArizSYR3eQDG8IyEKG90YO4SJIqCZcW8OKv8DCFAQABoMNjM3NDIzMTgzODA1Igz5n1xSuJnX%2BOyvGsoq3AORm8Qp6rzvnvnSt48fEMJURK4eT0SRf20ucqem0AOhxF7H6WpdTiROhzkUXJCDDfZF%2B8R7tV4%2FunCehxLVxEp0ZLXGiHl0w6KPxIduWxt%2FUGD6i%2B12ywkGRC%2BFMBrA99m9fHYEcmpFf3nyBYBrjXbN2TBRPfuxtQKQAXEWUoUMn%2FCuAYbpkEFRlRU7%2Fl%2FlnyzfvCgpsDMMvabgRL6dzas%2FvxzM%2BggN3C8j1IKZM6e%2FYQMBFOhAdDOSc1CzQ25jPkeqflVfXlNRue0mwi759HX3qcnLYaWlXm%2BdSPYHKX8gycnNRdfWecfdapcSeeYBVcYarLQEKXqYD4Mu6ndC5sjx2XDsQcH13PEfy6xkIwak4eYerqIe69HOAdcFmyqb7zmUU11LDiMemc%2BJm%2BtpcyUvJLQTAQqMqebaapbQvwoWJK8HflJlVGLZZIi9CEp5JDSIOd6ttReF7q5y3ox6xPR%2BTSkxGvekGhXhKgKOtOKT%2BuXYObZzTiMWodzkoTrf5yUPYyb32yJ690LWf4FNyqsl3JJBm4ZZ3Xy2ewto1qa%2FbiyzPWitHOus%2FRVZgre081u7s6qpGkAhD2IR%2FprbtIsi%2BBF6%2Bbrx63ejbPAA6NmGgMaXIC0ThVzN%2BNRezTD9%2BJ7BBjqkAVd4ULVfnbuxJFGTgyDNTkG5IOItAX56nLcS%2B%2BsdmOaBiXfzfgZa8S5W0RDUTwoz9o37XYLs4Pf8AQJDjPvdF%2B4P8HRKmrE8yNgYtoAMqNtCcoKO3Vx7evE3G5et09kKLu0vJWLoElMipOC6m5rigsIpc7ElXmlpgMxKIsOaWkpOHIbWOPETQLsRlLdIafre7Fo88y98d1uSd5i%2FsFuZKeNJXG5V&X-Amz-Signature=951247ea6b069d8e93268a246db765b747bcc35e7f4fc75595b37a4eaaaa196c&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKOXCJJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1gNwmAJbiQU2QjdfUv4zxmx5MSxBKX1of7TlW5p2K7gIhAJz3JCiW1gUArizSYR3eQDG8IyEKG90YO4SJIqCZcW8OKv8DCFAQABoMNjM3NDIzMTgzODA1Igz5n1xSuJnX%2BOyvGsoq3AORm8Qp6rzvnvnSt48fEMJURK4eT0SRf20ucqem0AOhxF7H6WpdTiROhzkUXJCDDfZF%2B8R7tV4%2FunCehxLVxEp0ZLXGiHl0w6KPxIduWxt%2FUGD6i%2B12ywkGRC%2BFMBrA99m9fHYEcmpFf3nyBYBrjXbN2TBRPfuxtQKQAXEWUoUMn%2FCuAYbpkEFRlRU7%2Fl%2FlnyzfvCgpsDMMvabgRL6dzas%2FvxzM%2BggN3C8j1IKZM6e%2FYQMBFOhAdDOSc1CzQ25jPkeqflVfXlNRue0mwi759HX3qcnLYaWlXm%2BdSPYHKX8gycnNRdfWecfdapcSeeYBVcYarLQEKXqYD4Mu6ndC5sjx2XDsQcH13PEfy6xkIwak4eYerqIe69HOAdcFmyqb7zmUU11LDiMemc%2BJm%2BtpcyUvJLQTAQqMqebaapbQvwoWJK8HflJlVGLZZIi9CEp5JDSIOd6ttReF7q5y3ox6xPR%2BTSkxGvekGhXhKgKOtOKT%2BuXYObZzTiMWodzkoTrf5yUPYyb32yJ690LWf4FNyqsl3JJBm4ZZ3Xy2ewto1qa%2FbiyzPWitHOus%2FRVZgre081u7s6qpGkAhD2IR%2FprbtIsi%2BBF6%2Bbrx63ejbPAA6NmGgMaXIC0ThVzN%2BNRezTD9%2BJ7BBjqkAVd4ULVfnbuxJFGTgyDNTkG5IOItAX56nLcS%2B%2BsdmOaBiXfzfgZa8S5W0RDUTwoz9o37XYLs4Pf8AQJDjPvdF%2B4P8HRKmrE8yNgYtoAMqNtCcoKO3Vx7evE3G5et09kKLu0vJWLoElMipOC6m5rigsIpc7ElXmlpgMxKIsOaWkpOHIbWOPETQLsRlLdIafre7Fo88y98d1uSd5i%2FsFuZKeNJXG5V&X-Amz-Signature=2bd825eaeff70f425e76f62490416a74be31146a053f5914c912e96f170c7a3d&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKOXCJJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1gNwmAJbiQU2QjdfUv4zxmx5MSxBKX1of7TlW5p2K7gIhAJz3JCiW1gUArizSYR3eQDG8IyEKG90YO4SJIqCZcW8OKv8DCFAQABoMNjM3NDIzMTgzODA1Igz5n1xSuJnX%2BOyvGsoq3AORm8Qp6rzvnvnSt48fEMJURK4eT0SRf20ucqem0AOhxF7H6WpdTiROhzkUXJCDDfZF%2B8R7tV4%2FunCehxLVxEp0ZLXGiHl0w6KPxIduWxt%2FUGD6i%2B12ywkGRC%2BFMBrA99m9fHYEcmpFf3nyBYBrjXbN2TBRPfuxtQKQAXEWUoUMn%2FCuAYbpkEFRlRU7%2Fl%2FlnyzfvCgpsDMMvabgRL6dzas%2FvxzM%2BggN3C8j1IKZM6e%2FYQMBFOhAdDOSc1CzQ25jPkeqflVfXlNRue0mwi759HX3qcnLYaWlXm%2BdSPYHKX8gycnNRdfWecfdapcSeeYBVcYarLQEKXqYD4Mu6ndC5sjx2XDsQcH13PEfy6xkIwak4eYerqIe69HOAdcFmyqb7zmUU11LDiMemc%2BJm%2BtpcyUvJLQTAQqMqebaapbQvwoWJK8HflJlVGLZZIi9CEp5JDSIOd6ttReF7q5y3ox6xPR%2BTSkxGvekGhXhKgKOtOKT%2BuXYObZzTiMWodzkoTrf5yUPYyb32yJ690LWf4FNyqsl3JJBm4ZZ3Xy2ewto1qa%2FbiyzPWitHOus%2FRVZgre081u7s6qpGkAhD2IR%2FprbtIsi%2BBF6%2Bbrx63ejbPAA6NmGgMaXIC0ThVzN%2BNRezTD9%2BJ7BBjqkAVd4ULVfnbuxJFGTgyDNTkG5IOItAX56nLcS%2B%2BsdmOaBiXfzfgZa8S5W0RDUTwoz9o37XYLs4Pf8AQJDjPvdF%2B4P8HRKmrE8yNgYtoAMqNtCcoKO3Vx7evE3G5et09kKLu0vJWLoElMipOC6m5rigsIpc7ElXmlpgMxKIsOaWkpOHIbWOPETQLsRlLdIafre7Fo88y98d1uSd5i%2FsFuZKeNJXG5V&X-Amz-Signature=f676bb3b488613c01d131b792fa603affcb9e193fe86ac602d93b69f73f655b3&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKOXCJJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1gNwmAJbiQU2QjdfUv4zxmx5MSxBKX1of7TlW5p2K7gIhAJz3JCiW1gUArizSYR3eQDG8IyEKG90YO4SJIqCZcW8OKv8DCFAQABoMNjM3NDIzMTgzODA1Igz5n1xSuJnX%2BOyvGsoq3AORm8Qp6rzvnvnSt48fEMJURK4eT0SRf20ucqem0AOhxF7H6WpdTiROhzkUXJCDDfZF%2B8R7tV4%2FunCehxLVxEp0ZLXGiHl0w6KPxIduWxt%2FUGD6i%2B12ywkGRC%2BFMBrA99m9fHYEcmpFf3nyBYBrjXbN2TBRPfuxtQKQAXEWUoUMn%2FCuAYbpkEFRlRU7%2Fl%2FlnyzfvCgpsDMMvabgRL6dzas%2FvxzM%2BggN3C8j1IKZM6e%2FYQMBFOhAdDOSc1CzQ25jPkeqflVfXlNRue0mwi759HX3qcnLYaWlXm%2BdSPYHKX8gycnNRdfWecfdapcSeeYBVcYarLQEKXqYD4Mu6ndC5sjx2XDsQcH13PEfy6xkIwak4eYerqIe69HOAdcFmyqb7zmUU11LDiMemc%2BJm%2BtpcyUvJLQTAQqMqebaapbQvwoWJK8HflJlVGLZZIi9CEp5JDSIOd6ttReF7q5y3ox6xPR%2BTSkxGvekGhXhKgKOtOKT%2BuXYObZzTiMWodzkoTrf5yUPYyb32yJ690LWf4FNyqsl3JJBm4ZZ3Xy2ewto1qa%2FbiyzPWitHOus%2FRVZgre081u7s6qpGkAhD2IR%2FprbtIsi%2BBF6%2Bbrx63ejbPAA6NmGgMaXIC0ThVzN%2BNRezTD9%2BJ7BBjqkAVd4ULVfnbuxJFGTgyDNTkG5IOItAX56nLcS%2B%2BsdmOaBiXfzfgZa8S5W0RDUTwoz9o37XYLs4Pf8AQJDjPvdF%2B4P8HRKmrE8yNgYtoAMqNtCcoKO3Vx7evE3G5et09kKLu0vJWLoElMipOC6m5rigsIpc7ElXmlpgMxKIsOaWkpOHIbWOPETQLsRlLdIafre7Fo88y98d1uSd5i%2FsFuZKeNJXG5V&X-Amz-Signature=a0c9c1ed485fa6acef930cdf075f9a34009c163b64f50cfa92f29f5d59a083cd&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663GKOXCJJ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T230902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1gNwmAJbiQU2QjdfUv4zxmx5MSxBKX1of7TlW5p2K7gIhAJz3JCiW1gUArizSYR3eQDG8IyEKG90YO4SJIqCZcW8OKv8DCFAQABoMNjM3NDIzMTgzODA1Igz5n1xSuJnX%2BOyvGsoq3AORm8Qp6rzvnvnSt48fEMJURK4eT0SRf20ucqem0AOhxF7H6WpdTiROhzkUXJCDDfZF%2B8R7tV4%2FunCehxLVxEp0ZLXGiHl0w6KPxIduWxt%2FUGD6i%2B12ywkGRC%2BFMBrA99m9fHYEcmpFf3nyBYBrjXbN2TBRPfuxtQKQAXEWUoUMn%2FCuAYbpkEFRlRU7%2Fl%2FlnyzfvCgpsDMMvabgRL6dzas%2FvxzM%2BggN3C8j1IKZM6e%2FYQMBFOhAdDOSc1CzQ25jPkeqflVfXlNRue0mwi759HX3qcnLYaWlXm%2BdSPYHKX8gycnNRdfWecfdapcSeeYBVcYarLQEKXqYD4Mu6ndC5sjx2XDsQcH13PEfy6xkIwak4eYerqIe69HOAdcFmyqb7zmUU11LDiMemc%2BJm%2BtpcyUvJLQTAQqMqebaapbQvwoWJK8HflJlVGLZZIi9CEp5JDSIOd6ttReF7q5y3ox6xPR%2BTSkxGvekGhXhKgKOtOKT%2BuXYObZzTiMWodzkoTrf5yUPYyb32yJ690LWf4FNyqsl3JJBm4ZZ3Xy2ewto1qa%2FbiyzPWitHOus%2FRVZgre081u7s6qpGkAhD2IR%2FprbtIsi%2BBF6%2Bbrx63ejbPAA6NmGgMaXIC0ThVzN%2BNRezTD9%2BJ7BBjqkAVd4ULVfnbuxJFGTgyDNTkG5IOItAX56nLcS%2B%2BsdmOaBiXfzfgZa8S5W0RDUTwoz9o37XYLs4Pf8AQJDjPvdF%2B4P8HRKmrE8yNgYtoAMqNtCcoKO3Vx7evE3G5et09kKLu0vJWLoElMipOC6m5rigsIpc7ElXmlpgMxKIsOaWkpOHIbWOPETQLsRlLdIafre7Fo88y98d1uSd5i%2FsFuZKeNJXG5V&X-Amz-Signature=38fb1dc80263889597c59e1c76df4841cf63a091af61922a543c4fb4c7a8e561&X-Amz-SignedHeaders=host&x-id=GetObject)
