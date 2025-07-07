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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQFXTYI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDFd4UUQRMioZ2Unqc6ZNd83Gs1rlTF7fLkqjLcd4ooRgIgV3wXvfogy3Ni7ucY3a0fpuQembn7SNozZ%2BM2nCmf8Rcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJLmv%2BlRzWGrqWK0FCrcA6DK3Dlgv91cZ%2Ba4e4lJd8wyT6JMj9Xf74bJ2OVmjEVudhgfSn9fqpEGeTPBxpycol4dSg%2FaEPU0pEkNCWTVDfuXl7OEXNy%2FJb5SxFjB20qESzi7wp4ArB2Lzo9uincpAqUuHaNvpTsdgTB2cqbUT12ExtwHtxDamlKegrUGh3fcLUSKGr4EAoEI0m6k7HlT%2FWE6xuGeu3idTjmT%2FuoCvXE93TKBWC61dyeSWlRdVqLuV79kC0%2Fb1JqlH2LTzdPElN3Ky0E%2BCxCk52HIh1b7eQTsBYLiYq50P7OoRkOQyuppKzJVtMGhtEf5Ukve0gecOrMmXx7sqaFBb37RPbqV9%2F7JDXiWrqXuxDuJJmJoCGczQexjEngXFxnFXqVa7G68E87yWk%2FD%2FjJxBYlYQtl4jZqpMIWLI%2FI4yOyTn3qcDYMEbTUvgFEyAt89gsxOPLu8pk5DSIoZyEs0AWqHMFJek8%2FNeI%2Bmy892%2BlRceq6q0kuuV%2BSz%2BN6QhoJ5PbwXUvXsyrEAQMrIp57W8zvr%2FvOerjpcVOF%2FWDs7bpgUHmc5OzCu8oGRh%2Bc9uxzHu3YRfTwbL%2Bf9O9Y41uuz%2B6aCKZwQ1USvSBIoeMWvp5to%2BMD%2F3yjvhYcg6p%2BVEHqkE3vBMO2crcMGOqUB0xKIB5vNtEitQiM7tKO0TQu%2FBiNsWns8IqEJy%2BkkOf7MZ%2Bt0pYSdWwew1xMFi0xZ00yKM%2BPt%2BNhhRJzMfhJrrZwJe1foISpTNXP9Go03m3M4hAXQuWrmGKS7RPh1BfskyQHuJDVlWSUgIgrvIHVjNHFm1L1iw0FpXKdU%2F%2FdSTi5xWU1pyw05oShOGHzIUkTVD%2BAk9BpeK02IZVh34fbc%2FTDFtBcs&X-Amz-Signature=11edce424085410bf8e2eb3948432cf84f668c86297226b91a59298a2098464d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQFXTYI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDFd4UUQRMioZ2Unqc6ZNd83Gs1rlTF7fLkqjLcd4ooRgIgV3wXvfogy3Ni7ucY3a0fpuQembn7SNozZ%2BM2nCmf8Rcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJLmv%2BlRzWGrqWK0FCrcA6DK3Dlgv91cZ%2Ba4e4lJd8wyT6JMj9Xf74bJ2OVmjEVudhgfSn9fqpEGeTPBxpycol4dSg%2FaEPU0pEkNCWTVDfuXl7OEXNy%2FJb5SxFjB20qESzi7wp4ArB2Lzo9uincpAqUuHaNvpTsdgTB2cqbUT12ExtwHtxDamlKegrUGh3fcLUSKGr4EAoEI0m6k7HlT%2FWE6xuGeu3idTjmT%2FuoCvXE93TKBWC61dyeSWlRdVqLuV79kC0%2Fb1JqlH2LTzdPElN3Ky0E%2BCxCk52HIh1b7eQTsBYLiYq50P7OoRkOQyuppKzJVtMGhtEf5Ukve0gecOrMmXx7sqaFBb37RPbqV9%2F7JDXiWrqXuxDuJJmJoCGczQexjEngXFxnFXqVa7G68E87yWk%2FD%2FjJxBYlYQtl4jZqpMIWLI%2FI4yOyTn3qcDYMEbTUvgFEyAt89gsxOPLu8pk5DSIoZyEs0AWqHMFJek8%2FNeI%2Bmy892%2BlRceq6q0kuuV%2BSz%2BN6QhoJ5PbwXUvXsyrEAQMrIp57W8zvr%2FvOerjpcVOF%2FWDs7bpgUHmc5OzCu8oGRh%2Bc9uxzHu3YRfTwbL%2Bf9O9Y41uuz%2B6aCKZwQ1USvSBIoeMWvp5to%2BMD%2F3yjvhYcg6p%2BVEHqkE3vBMO2crcMGOqUB0xKIB5vNtEitQiM7tKO0TQu%2FBiNsWns8IqEJy%2BkkOf7MZ%2Bt0pYSdWwew1xMFi0xZ00yKM%2BPt%2BNhhRJzMfhJrrZwJe1foISpTNXP9Go03m3M4hAXQuWrmGKS7RPh1BfskyQHuJDVlWSUgIgrvIHVjNHFm1L1iw0FpXKdU%2F%2FdSTi5xWU1pyw05oShOGHzIUkTVD%2BAk9BpeK02IZVh34fbc%2FTDFtBcs&X-Amz-Signature=a660502093e1f642049353a134af7806fbde11ce4818808d65145e2b6c1d6fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQFXTYI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDFd4UUQRMioZ2Unqc6ZNd83Gs1rlTF7fLkqjLcd4ooRgIgV3wXvfogy3Ni7ucY3a0fpuQembn7SNozZ%2BM2nCmf8Rcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJLmv%2BlRzWGrqWK0FCrcA6DK3Dlgv91cZ%2Ba4e4lJd8wyT6JMj9Xf74bJ2OVmjEVudhgfSn9fqpEGeTPBxpycol4dSg%2FaEPU0pEkNCWTVDfuXl7OEXNy%2FJb5SxFjB20qESzi7wp4ArB2Lzo9uincpAqUuHaNvpTsdgTB2cqbUT12ExtwHtxDamlKegrUGh3fcLUSKGr4EAoEI0m6k7HlT%2FWE6xuGeu3idTjmT%2FuoCvXE93TKBWC61dyeSWlRdVqLuV79kC0%2Fb1JqlH2LTzdPElN3Ky0E%2BCxCk52HIh1b7eQTsBYLiYq50P7OoRkOQyuppKzJVtMGhtEf5Ukve0gecOrMmXx7sqaFBb37RPbqV9%2F7JDXiWrqXuxDuJJmJoCGczQexjEngXFxnFXqVa7G68E87yWk%2FD%2FjJxBYlYQtl4jZqpMIWLI%2FI4yOyTn3qcDYMEbTUvgFEyAt89gsxOPLu8pk5DSIoZyEs0AWqHMFJek8%2FNeI%2Bmy892%2BlRceq6q0kuuV%2BSz%2BN6QhoJ5PbwXUvXsyrEAQMrIp57W8zvr%2FvOerjpcVOF%2FWDs7bpgUHmc5OzCu8oGRh%2Bc9uxzHu3YRfTwbL%2Bf9O9Y41uuz%2B6aCKZwQ1USvSBIoeMWvp5to%2BMD%2F3yjvhYcg6p%2BVEHqkE3vBMO2crcMGOqUB0xKIB5vNtEitQiM7tKO0TQu%2FBiNsWns8IqEJy%2BkkOf7MZ%2Bt0pYSdWwew1xMFi0xZ00yKM%2BPt%2BNhhRJzMfhJrrZwJe1foISpTNXP9Go03m3M4hAXQuWrmGKS7RPh1BfskyQHuJDVlWSUgIgrvIHVjNHFm1L1iw0FpXKdU%2F%2FdSTi5xWU1pyw05oShOGHzIUkTVD%2BAk9BpeK02IZVh34fbc%2FTDFtBcs&X-Amz-Signature=b34b10a42edf28e676a49a4cc4a88c32a98cf104cfee9a9e5861863a85d97b69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQFXTYI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDFd4UUQRMioZ2Unqc6ZNd83Gs1rlTF7fLkqjLcd4ooRgIgV3wXvfogy3Ni7ucY3a0fpuQembn7SNozZ%2BM2nCmf8Rcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJLmv%2BlRzWGrqWK0FCrcA6DK3Dlgv91cZ%2Ba4e4lJd8wyT6JMj9Xf74bJ2OVmjEVudhgfSn9fqpEGeTPBxpycol4dSg%2FaEPU0pEkNCWTVDfuXl7OEXNy%2FJb5SxFjB20qESzi7wp4ArB2Lzo9uincpAqUuHaNvpTsdgTB2cqbUT12ExtwHtxDamlKegrUGh3fcLUSKGr4EAoEI0m6k7HlT%2FWE6xuGeu3idTjmT%2FuoCvXE93TKBWC61dyeSWlRdVqLuV79kC0%2Fb1JqlH2LTzdPElN3Ky0E%2BCxCk52HIh1b7eQTsBYLiYq50P7OoRkOQyuppKzJVtMGhtEf5Ukve0gecOrMmXx7sqaFBb37RPbqV9%2F7JDXiWrqXuxDuJJmJoCGczQexjEngXFxnFXqVa7G68E87yWk%2FD%2FjJxBYlYQtl4jZqpMIWLI%2FI4yOyTn3qcDYMEbTUvgFEyAt89gsxOPLu8pk5DSIoZyEs0AWqHMFJek8%2FNeI%2Bmy892%2BlRceq6q0kuuV%2BSz%2BN6QhoJ5PbwXUvXsyrEAQMrIp57W8zvr%2FvOerjpcVOF%2FWDs7bpgUHmc5OzCu8oGRh%2Bc9uxzHu3YRfTwbL%2Bf9O9Y41uuz%2B6aCKZwQ1USvSBIoeMWvp5to%2BMD%2F3yjvhYcg6p%2BVEHqkE3vBMO2crcMGOqUB0xKIB5vNtEitQiM7tKO0TQu%2FBiNsWns8IqEJy%2BkkOf7MZ%2Bt0pYSdWwew1xMFi0xZ00yKM%2BPt%2BNhhRJzMfhJrrZwJe1foISpTNXP9Go03m3M4hAXQuWrmGKS7RPh1BfskyQHuJDVlWSUgIgrvIHVjNHFm1L1iw0FpXKdU%2F%2FdSTi5xWU1pyw05oShOGHzIUkTVD%2BAk9BpeK02IZVh34fbc%2FTDFtBcs&X-Amz-Signature=2f314c6af804e4c6696d2ad4a92786baefbdebf7e3b1ff6bed8c0e562703cfd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQFXTYI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDFd4UUQRMioZ2Unqc6ZNd83Gs1rlTF7fLkqjLcd4ooRgIgV3wXvfogy3Ni7ucY3a0fpuQembn7SNozZ%2BM2nCmf8Rcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJLmv%2BlRzWGrqWK0FCrcA6DK3Dlgv91cZ%2Ba4e4lJd8wyT6JMj9Xf74bJ2OVmjEVudhgfSn9fqpEGeTPBxpycol4dSg%2FaEPU0pEkNCWTVDfuXl7OEXNy%2FJb5SxFjB20qESzi7wp4ArB2Lzo9uincpAqUuHaNvpTsdgTB2cqbUT12ExtwHtxDamlKegrUGh3fcLUSKGr4EAoEI0m6k7HlT%2FWE6xuGeu3idTjmT%2FuoCvXE93TKBWC61dyeSWlRdVqLuV79kC0%2Fb1JqlH2LTzdPElN3Ky0E%2BCxCk52HIh1b7eQTsBYLiYq50P7OoRkOQyuppKzJVtMGhtEf5Ukve0gecOrMmXx7sqaFBb37RPbqV9%2F7JDXiWrqXuxDuJJmJoCGczQexjEngXFxnFXqVa7G68E87yWk%2FD%2FjJxBYlYQtl4jZqpMIWLI%2FI4yOyTn3qcDYMEbTUvgFEyAt89gsxOPLu8pk5DSIoZyEs0AWqHMFJek8%2FNeI%2Bmy892%2BlRceq6q0kuuV%2BSz%2BN6QhoJ5PbwXUvXsyrEAQMrIp57W8zvr%2FvOerjpcVOF%2FWDs7bpgUHmc5OzCu8oGRh%2Bc9uxzHu3YRfTwbL%2Bf9O9Y41uuz%2B6aCKZwQ1USvSBIoeMWvp5to%2BMD%2F3yjvhYcg6p%2BVEHqkE3vBMO2crcMGOqUB0xKIB5vNtEitQiM7tKO0TQu%2FBiNsWns8IqEJy%2BkkOf7MZ%2Bt0pYSdWwew1xMFi0xZ00yKM%2BPt%2BNhhRJzMfhJrrZwJe1foISpTNXP9Go03m3M4hAXQuWrmGKS7RPh1BfskyQHuJDVlWSUgIgrvIHVjNHFm1L1iw0FpXKdU%2F%2FdSTi5xWU1pyw05oShOGHzIUkTVD%2BAk9BpeK02IZVh34fbc%2FTDFtBcs&X-Amz-Signature=cc6fa7a8d2743416964502a9922ec2a0e68fdc23de35e15a52788b6029ab0f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663SQFXTYI%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T051322Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQDFd4UUQRMioZ2Unqc6ZNd83Gs1rlTF7fLkqjLcd4ooRgIgV3wXvfogy3Ni7ucY3a0fpuQembn7SNozZ%2BM2nCmf8Rcq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDJLmv%2BlRzWGrqWK0FCrcA6DK3Dlgv91cZ%2Ba4e4lJd8wyT6JMj9Xf74bJ2OVmjEVudhgfSn9fqpEGeTPBxpycol4dSg%2FaEPU0pEkNCWTVDfuXl7OEXNy%2FJb5SxFjB20qESzi7wp4ArB2Lzo9uincpAqUuHaNvpTsdgTB2cqbUT12ExtwHtxDamlKegrUGh3fcLUSKGr4EAoEI0m6k7HlT%2FWE6xuGeu3idTjmT%2FuoCvXE93TKBWC61dyeSWlRdVqLuV79kC0%2Fb1JqlH2LTzdPElN3Ky0E%2BCxCk52HIh1b7eQTsBYLiYq50P7OoRkOQyuppKzJVtMGhtEf5Ukve0gecOrMmXx7sqaFBb37RPbqV9%2F7JDXiWrqXuxDuJJmJoCGczQexjEngXFxnFXqVa7G68E87yWk%2FD%2FjJxBYlYQtl4jZqpMIWLI%2FI4yOyTn3qcDYMEbTUvgFEyAt89gsxOPLu8pk5DSIoZyEs0AWqHMFJek8%2FNeI%2Bmy892%2BlRceq6q0kuuV%2BSz%2BN6QhoJ5PbwXUvXsyrEAQMrIp57W8zvr%2FvOerjpcVOF%2FWDs7bpgUHmc5OzCu8oGRh%2Bc9uxzHu3YRfTwbL%2Bf9O9Y41uuz%2B6aCKZwQ1USvSBIoeMWvp5to%2BMD%2F3yjvhYcg6p%2BVEHqkE3vBMO2crcMGOqUB0xKIB5vNtEitQiM7tKO0TQu%2FBiNsWns8IqEJy%2BkkOf7MZ%2Bt0pYSdWwew1xMFi0xZ00yKM%2BPt%2BNhhRJzMfhJrrZwJe1foISpTNXP9Go03m3M4hAXQuWrmGKS7RPh1BfskyQHuJDVlWSUgIgrvIHVjNHFm1L1iw0FpXKdU%2F%2FdSTi5xWU1pyw05oShOGHzIUkTVD%2BAk9BpeK02IZVh34fbc%2FTDFtBcs&X-Amz-Signature=ad1add42c8fd8c198e381d504ea08a217cd1c440b69b3eb93467f944d0fa947a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
