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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZOBGCL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78o6JE03Z60z9y4Mofz0TotumlJB%2BZYHnmF5VqJIw8wIgHcRbGxVE4SI7LyzAeOH%2FwPRGeT8YxuLCU8XIuGAcI4cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpYvBLREKaTSJkZ0yrcAw%2BeOGZUzHUWM3NGxd8G0Ye%2F95uA90u1RoKZliF1Ry9NeCZVuljQdwfwD9c2u1R7HiXYp84VUSXi0D%2BE9X2MRNsGn6kZ9bi0KfQrSs86C5Ke8TXzSqRLCKukgZojwPBwwlTZYZYVQPIVMn%2FzyzeB8xhP555%2BzkBgIihCEONNdU0apsieaxuGCZiA58VVaOaa7ejF1RQz9qqEFPpjL1PmlJ6w1A9OuDOR1AW6WVHUkdIdgjBXoEn%2FXxPUOSMro%2BavSwTGbmKPMtKEKg9nVMZnTtFmpiAzMcxL26VfTD0UUcX2PPWdTaHSMBo9ofG8AVJ%2FIDfCw4WM7%2Fan3bGJVCZ%2Fbfzx0b7ntaGCngwRhXHoCKQqY56Li6WoqEaHDurYnKUhLZjXlzRR2ilNk6J3tCJpIt%2BTaP6AY5oJYex8ae08w741gzOcR8BedEUCJNu6Hhfd95WOAzi8RT2M1AEz72BY%2Fo8aErHyKIFhQD5Mcye2fVaCalssmFI2qTzXKosIpvEUz%2FQ2G%2B351pyY9HqNpnPeeNef8Q2JE6gh7e8nBHbveFTbAbkpGnMd6NA8OHHZAAhxDIsfz3MclJ7mJfkMdJo2UUKG5gX469nSxe4xS8RM8UxfpF%2BfsBCxbEmbXLJXMKzM9sIGOqUBEdDLVURx3b29yWmxhINHzVXxzLc1mg0CJBUJzO7Jvxhre4CwViLzAOD%2BBOSyTE%2FATTJgi4gR8a%2BeoORg1hNouS5kA%2BIPm4xkuGYsPfblMmonkPdHVvvI%2Fau2YpjnPuN2yBW%2FUlVSTZ0r7CY8%2F0dG2iwa4tqJC321enTlMKGGrkLGlU%2FYaJFq3tVYKb73NPkPZJP%2BQOM9fFKpvge1Hj7x8NvKvhZK&X-Amz-Signature=b63157365720ecbeb1cc466e954f1edf41746d0abc883c8d74875c2c2cb883bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZOBGCL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78o6JE03Z60z9y4Mofz0TotumlJB%2BZYHnmF5VqJIw8wIgHcRbGxVE4SI7LyzAeOH%2FwPRGeT8YxuLCU8XIuGAcI4cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpYvBLREKaTSJkZ0yrcAw%2BeOGZUzHUWM3NGxd8G0Ye%2F95uA90u1RoKZliF1Ry9NeCZVuljQdwfwD9c2u1R7HiXYp84VUSXi0D%2BE9X2MRNsGn6kZ9bi0KfQrSs86C5Ke8TXzSqRLCKukgZojwPBwwlTZYZYVQPIVMn%2FzyzeB8xhP555%2BzkBgIihCEONNdU0apsieaxuGCZiA58VVaOaa7ejF1RQz9qqEFPpjL1PmlJ6w1A9OuDOR1AW6WVHUkdIdgjBXoEn%2FXxPUOSMro%2BavSwTGbmKPMtKEKg9nVMZnTtFmpiAzMcxL26VfTD0UUcX2PPWdTaHSMBo9ofG8AVJ%2FIDfCw4WM7%2Fan3bGJVCZ%2Fbfzx0b7ntaGCngwRhXHoCKQqY56Li6WoqEaHDurYnKUhLZjXlzRR2ilNk6J3tCJpIt%2BTaP6AY5oJYex8ae08w741gzOcR8BedEUCJNu6Hhfd95WOAzi8RT2M1AEz72BY%2Fo8aErHyKIFhQD5Mcye2fVaCalssmFI2qTzXKosIpvEUz%2FQ2G%2B351pyY9HqNpnPeeNef8Q2JE6gh7e8nBHbveFTbAbkpGnMd6NA8OHHZAAhxDIsfz3MclJ7mJfkMdJo2UUKG5gX469nSxe4xS8RM8UxfpF%2BfsBCxbEmbXLJXMKzM9sIGOqUBEdDLVURx3b29yWmxhINHzVXxzLc1mg0CJBUJzO7Jvxhre4CwViLzAOD%2BBOSyTE%2FATTJgi4gR8a%2BeoORg1hNouS5kA%2BIPm4xkuGYsPfblMmonkPdHVvvI%2Fau2YpjnPuN2yBW%2FUlVSTZ0r7CY8%2F0dG2iwa4tqJC321enTlMKGGrkLGlU%2FYaJFq3tVYKb73NPkPZJP%2BQOM9fFKpvge1Hj7x8NvKvhZK&X-Amz-Signature=fdf71676c85485409621e8699eb3d4841e1a849040de76f9582b7150a71b3562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZOBGCL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78o6JE03Z60z9y4Mofz0TotumlJB%2BZYHnmF5VqJIw8wIgHcRbGxVE4SI7LyzAeOH%2FwPRGeT8YxuLCU8XIuGAcI4cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpYvBLREKaTSJkZ0yrcAw%2BeOGZUzHUWM3NGxd8G0Ye%2F95uA90u1RoKZliF1Ry9NeCZVuljQdwfwD9c2u1R7HiXYp84VUSXi0D%2BE9X2MRNsGn6kZ9bi0KfQrSs86C5Ke8TXzSqRLCKukgZojwPBwwlTZYZYVQPIVMn%2FzyzeB8xhP555%2BzkBgIihCEONNdU0apsieaxuGCZiA58VVaOaa7ejF1RQz9qqEFPpjL1PmlJ6w1A9OuDOR1AW6WVHUkdIdgjBXoEn%2FXxPUOSMro%2BavSwTGbmKPMtKEKg9nVMZnTtFmpiAzMcxL26VfTD0UUcX2PPWdTaHSMBo9ofG8AVJ%2FIDfCw4WM7%2Fan3bGJVCZ%2Fbfzx0b7ntaGCngwRhXHoCKQqY56Li6WoqEaHDurYnKUhLZjXlzRR2ilNk6J3tCJpIt%2BTaP6AY5oJYex8ae08w741gzOcR8BedEUCJNu6Hhfd95WOAzi8RT2M1AEz72BY%2Fo8aErHyKIFhQD5Mcye2fVaCalssmFI2qTzXKosIpvEUz%2FQ2G%2B351pyY9HqNpnPeeNef8Q2JE6gh7e8nBHbveFTbAbkpGnMd6NA8OHHZAAhxDIsfz3MclJ7mJfkMdJo2UUKG5gX469nSxe4xS8RM8UxfpF%2BfsBCxbEmbXLJXMKzM9sIGOqUBEdDLVURx3b29yWmxhINHzVXxzLc1mg0CJBUJzO7Jvxhre4CwViLzAOD%2BBOSyTE%2FATTJgi4gR8a%2BeoORg1hNouS5kA%2BIPm4xkuGYsPfblMmonkPdHVvvI%2Fau2YpjnPuN2yBW%2FUlVSTZ0r7CY8%2F0dG2iwa4tqJC321enTlMKGGrkLGlU%2FYaJFq3tVYKb73NPkPZJP%2BQOM9fFKpvge1Hj7x8NvKvhZK&X-Amz-Signature=749938fc331a55e6a9b7e73e445af8e0e8f0c4b805032b7ccfb52c9106c11190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZOBGCL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78o6JE03Z60z9y4Mofz0TotumlJB%2BZYHnmF5VqJIw8wIgHcRbGxVE4SI7LyzAeOH%2FwPRGeT8YxuLCU8XIuGAcI4cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpYvBLREKaTSJkZ0yrcAw%2BeOGZUzHUWM3NGxd8G0Ye%2F95uA90u1RoKZliF1Ry9NeCZVuljQdwfwD9c2u1R7HiXYp84VUSXi0D%2BE9X2MRNsGn6kZ9bi0KfQrSs86C5Ke8TXzSqRLCKukgZojwPBwwlTZYZYVQPIVMn%2FzyzeB8xhP555%2BzkBgIihCEONNdU0apsieaxuGCZiA58VVaOaa7ejF1RQz9qqEFPpjL1PmlJ6w1A9OuDOR1AW6WVHUkdIdgjBXoEn%2FXxPUOSMro%2BavSwTGbmKPMtKEKg9nVMZnTtFmpiAzMcxL26VfTD0UUcX2PPWdTaHSMBo9ofG8AVJ%2FIDfCw4WM7%2Fan3bGJVCZ%2Fbfzx0b7ntaGCngwRhXHoCKQqY56Li6WoqEaHDurYnKUhLZjXlzRR2ilNk6J3tCJpIt%2BTaP6AY5oJYex8ae08w741gzOcR8BedEUCJNu6Hhfd95WOAzi8RT2M1AEz72BY%2Fo8aErHyKIFhQD5Mcye2fVaCalssmFI2qTzXKosIpvEUz%2FQ2G%2B351pyY9HqNpnPeeNef8Q2JE6gh7e8nBHbveFTbAbkpGnMd6NA8OHHZAAhxDIsfz3MclJ7mJfkMdJo2UUKG5gX469nSxe4xS8RM8UxfpF%2BfsBCxbEmbXLJXMKzM9sIGOqUBEdDLVURx3b29yWmxhINHzVXxzLc1mg0CJBUJzO7Jvxhre4CwViLzAOD%2BBOSyTE%2FATTJgi4gR8a%2BeoORg1hNouS5kA%2BIPm4xkuGYsPfblMmonkPdHVvvI%2Fau2YpjnPuN2yBW%2FUlVSTZ0r7CY8%2F0dG2iwa4tqJC321enTlMKGGrkLGlU%2FYaJFq3tVYKb73NPkPZJP%2BQOM9fFKpvge1Hj7x8NvKvhZK&X-Amz-Signature=2efe30d4ce77c529bcaa37a57b1879bc24420ae09299d5ac27a6160e6536b7a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZOBGCL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78o6JE03Z60z9y4Mofz0TotumlJB%2BZYHnmF5VqJIw8wIgHcRbGxVE4SI7LyzAeOH%2FwPRGeT8YxuLCU8XIuGAcI4cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpYvBLREKaTSJkZ0yrcAw%2BeOGZUzHUWM3NGxd8G0Ye%2F95uA90u1RoKZliF1Ry9NeCZVuljQdwfwD9c2u1R7HiXYp84VUSXi0D%2BE9X2MRNsGn6kZ9bi0KfQrSs86C5Ke8TXzSqRLCKukgZojwPBwwlTZYZYVQPIVMn%2FzyzeB8xhP555%2BzkBgIihCEONNdU0apsieaxuGCZiA58VVaOaa7ejF1RQz9qqEFPpjL1PmlJ6w1A9OuDOR1AW6WVHUkdIdgjBXoEn%2FXxPUOSMro%2BavSwTGbmKPMtKEKg9nVMZnTtFmpiAzMcxL26VfTD0UUcX2PPWdTaHSMBo9ofG8AVJ%2FIDfCw4WM7%2Fan3bGJVCZ%2Fbfzx0b7ntaGCngwRhXHoCKQqY56Li6WoqEaHDurYnKUhLZjXlzRR2ilNk6J3tCJpIt%2BTaP6AY5oJYex8ae08w741gzOcR8BedEUCJNu6Hhfd95WOAzi8RT2M1AEz72BY%2Fo8aErHyKIFhQD5Mcye2fVaCalssmFI2qTzXKosIpvEUz%2FQ2G%2B351pyY9HqNpnPeeNef8Q2JE6gh7e8nBHbveFTbAbkpGnMd6NA8OHHZAAhxDIsfz3MclJ7mJfkMdJo2UUKG5gX469nSxe4xS8RM8UxfpF%2BfsBCxbEmbXLJXMKzM9sIGOqUBEdDLVURx3b29yWmxhINHzVXxzLc1mg0CJBUJzO7Jvxhre4CwViLzAOD%2BBOSyTE%2FATTJgi4gR8a%2BeoORg1hNouS5kA%2BIPm4xkuGYsPfblMmonkPdHVvvI%2Fau2YpjnPuN2yBW%2FUlVSTZ0r7CY8%2F0dG2iwa4tqJC321enTlMKGGrkLGlU%2FYaJFq3tVYKb73NPkPZJP%2BQOM9fFKpvge1Hj7x8NvKvhZK&X-Amz-Signature=0d87a90e2b5d7acc3b94d87a8aa5f350385a0565553957f75ee43029f1930e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644ZOBGCL%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T200945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIQD78o6JE03Z60z9y4Mofz0TotumlJB%2BZYHnmF5VqJIw8wIgHcRbGxVE4SI7LyzAeOH%2FwPRGeT8YxuLCU8XIuGAcI4cq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBpYvBLREKaTSJkZ0yrcAw%2BeOGZUzHUWM3NGxd8G0Ye%2F95uA90u1RoKZliF1Ry9NeCZVuljQdwfwD9c2u1R7HiXYp84VUSXi0D%2BE9X2MRNsGn6kZ9bi0KfQrSs86C5Ke8TXzSqRLCKukgZojwPBwwlTZYZYVQPIVMn%2FzyzeB8xhP555%2BzkBgIihCEONNdU0apsieaxuGCZiA58VVaOaa7ejF1RQz9qqEFPpjL1PmlJ6w1A9OuDOR1AW6WVHUkdIdgjBXoEn%2FXxPUOSMro%2BavSwTGbmKPMtKEKg9nVMZnTtFmpiAzMcxL26VfTD0UUcX2PPWdTaHSMBo9ofG8AVJ%2FIDfCw4WM7%2Fan3bGJVCZ%2Fbfzx0b7ntaGCngwRhXHoCKQqY56Li6WoqEaHDurYnKUhLZjXlzRR2ilNk6J3tCJpIt%2BTaP6AY5oJYex8ae08w741gzOcR8BedEUCJNu6Hhfd95WOAzi8RT2M1AEz72BY%2Fo8aErHyKIFhQD5Mcye2fVaCalssmFI2qTzXKosIpvEUz%2FQ2G%2B351pyY9HqNpnPeeNef8Q2JE6gh7e8nBHbveFTbAbkpGnMd6NA8OHHZAAhxDIsfz3MclJ7mJfkMdJo2UUKG5gX469nSxe4xS8RM8UxfpF%2BfsBCxbEmbXLJXMKzM9sIGOqUBEdDLVURx3b29yWmxhINHzVXxzLc1mg0CJBUJzO7Jvxhre4CwViLzAOD%2BBOSyTE%2FATTJgi4gR8a%2BeoORg1hNouS5kA%2BIPm4xkuGYsPfblMmonkPdHVvvI%2Fau2YpjnPuN2yBW%2FUlVSTZ0r7CY8%2F0dG2iwa4tqJC321enTlMKGGrkLGlU%2FYaJFq3tVYKb73NPkPZJP%2BQOM9fFKpvge1Hj7x8NvKvhZK&X-Amz-Signature=9dfa4a9b06b1e77248c1949820e44534e154b1827830e8b19f5f85482ab319a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)
