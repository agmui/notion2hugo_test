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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVOD4SQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Y%2FSaIJ7PslPpLZpXlqKLf4KucC2T8oY5T5mUx5AJgIgFFzho%2FAlFbnTjwcjvJ5LrLgt5RxTPdSxaIlTKNu9rf8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDN4Lyxf0PtyfbXUU%2FSrcA9xcD1h5UrWa3jOQij3Wv8N3EO%2FKSYZvXuTWFFSz4NKGxy1MTC0BSF1iRV63VIKYbggwY7pY9ttkbZ16D2C%2BaQePfU8YkGazZ0A0fHaFF9hPJ8vL1xtp5Kzg19DlslCd%2F0RnOIwYjCMDRI87%2FhGPIZ30Z18Qt%2Ft8oFzpX2pxG11KkoOHCw54bzuNtmIY6WTsgjrs96WJhIyO%2Fqx4OAiY5S4qenY5YHz8Dr4cym85XZTCxacoQKgwywkUvfHR%2BVCaqQ1pFxgTX0N%2BQ5DWPYgj75i1hH8%2BnZvH48C%2FwmyNzvgHbLbEpxtRIMOnWw9e7sVbLm08U4S79QXal%2Brqfc6dW%2FNEFQfjJ4xZ1bWvOFvboZVmUtTwQfhJqwQqG6yfEL%2FsqhYMmd2C0%2BFwC0qUE2nR%2BtBMq4Rh8DQCLwOJ1CXBTaGJ3XLEeSOFkvrkLalSJRdQeh%2BQwL1mVSzyc82t38qLFVrlZOcMoo1Mmp0bvBmNAzgTUhYK8rnNAB8ACA4q7PhMXchOssUy7AdMNLyhFYHIXQbckXdPE6Oynv93F%2BLHX%2FQnJbmNJjAuRTfrAvQDwXxduHboWK%2BAMe460hUQ9RDfFwaqant8TRNkKdefp9ZQdKAmEEG6ntb3f0UeQdKaML%2F%2ByL8GOqUBotW1ls%2FcrQ7s9UDBYiipPCGqMOIh%2BEq8ea9MFQiUjwvJ2I67VghEZe%2FBzQnVlCfKH%2FILocoHRn5NjdztW1%2FXFq%2Fcbak4XSoWSWaVhndzUYGG9AgfPJqAC4ngCz6CO6TSg0xIqux4uxoWGVeBF8qUt0TQ9GbmuNYHr%2FUyuIWPNROL3kTEbchb4NYoQV8Xcehht%2F6vp6yMQv6hDNN7%2FQhOtbh292A2&X-Amz-Signature=60bc946810a2ec2751889c5d72c7439b3e0168d0ddbed77447e2ab44b1f79855&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVOD4SQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Y%2FSaIJ7PslPpLZpXlqKLf4KucC2T8oY5T5mUx5AJgIgFFzho%2FAlFbnTjwcjvJ5LrLgt5RxTPdSxaIlTKNu9rf8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDN4Lyxf0PtyfbXUU%2FSrcA9xcD1h5UrWa3jOQij3Wv8N3EO%2FKSYZvXuTWFFSz4NKGxy1MTC0BSF1iRV63VIKYbggwY7pY9ttkbZ16D2C%2BaQePfU8YkGazZ0A0fHaFF9hPJ8vL1xtp5Kzg19DlslCd%2F0RnOIwYjCMDRI87%2FhGPIZ30Z18Qt%2Ft8oFzpX2pxG11KkoOHCw54bzuNtmIY6WTsgjrs96WJhIyO%2Fqx4OAiY5S4qenY5YHz8Dr4cym85XZTCxacoQKgwywkUvfHR%2BVCaqQ1pFxgTX0N%2BQ5DWPYgj75i1hH8%2BnZvH48C%2FwmyNzvgHbLbEpxtRIMOnWw9e7sVbLm08U4S79QXal%2Brqfc6dW%2FNEFQfjJ4xZ1bWvOFvboZVmUtTwQfhJqwQqG6yfEL%2FsqhYMmd2C0%2BFwC0qUE2nR%2BtBMq4Rh8DQCLwOJ1CXBTaGJ3XLEeSOFkvrkLalSJRdQeh%2BQwL1mVSzyc82t38qLFVrlZOcMoo1Mmp0bvBmNAzgTUhYK8rnNAB8ACA4q7PhMXchOssUy7AdMNLyhFYHIXQbckXdPE6Oynv93F%2BLHX%2FQnJbmNJjAuRTfrAvQDwXxduHboWK%2BAMe460hUQ9RDfFwaqant8TRNkKdefp9ZQdKAmEEG6ntb3f0UeQdKaML%2F%2ByL8GOqUBotW1ls%2FcrQ7s9UDBYiipPCGqMOIh%2BEq8ea9MFQiUjwvJ2I67VghEZe%2FBzQnVlCfKH%2FILocoHRn5NjdztW1%2FXFq%2Fcbak4XSoWSWaVhndzUYGG9AgfPJqAC4ngCz6CO6TSg0xIqux4uxoWGVeBF8qUt0TQ9GbmuNYHr%2FUyuIWPNROL3kTEbchb4NYoQV8Xcehht%2F6vp6yMQv6hDNN7%2FQhOtbh292A2&X-Amz-Signature=2a838717c0b96a408026c3a3abbc5aa11bcfced5e4e0f0df70190c93a6962fe7&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVOD4SQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Y%2FSaIJ7PslPpLZpXlqKLf4KucC2T8oY5T5mUx5AJgIgFFzho%2FAlFbnTjwcjvJ5LrLgt5RxTPdSxaIlTKNu9rf8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDN4Lyxf0PtyfbXUU%2FSrcA9xcD1h5UrWa3jOQij3Wv8N3EO%2FKSYZvXuTWFFSz4NKGxy1MTC0BSF1iRV63VIKYbggwY7pY9ttkbZ16D2C%2BaQePfU8YkGazZ0A0fHaFF9hPJ8vL1xtp5Kzg19DlslCd%2F0RnOIwYjCMDRI87%2FhGPIZ30Z18Qt%2Ft8oFzpX2pxG11KkoOHCw54bzuNtmIY6WTsgjrs96WJhIyO%2Fqx4OAiY5S4qenY5YHz8Dr4cym85XZTCxacoQKgwywkUvfHR%2BVCaqQ1pFxgTX0N%2BQ5DWPYgj75i1hH8%2BnZvH48C%2FwmyNzvgHbLbEpxtRIMOnWw9e7sVbLm08U4S79QXal%2Brqfc6dW%2FNEFQfjJ4xZ1bWvOFvboZVmUtTwQfhJqwQqG6yfEL%2FsqhYMmd2C0%2BFwC0qUE2nR%2BtBMq4Rh8DQCLwOJ1CXBTaGJ3XLEeSOFkvrkLalSJRdQeh%2BQwL1mVSzyc82t38qLFVrlZOcMoo1Mmp0bvBmNAzgTUhYK8rnNAB8ACA4q7PhMXchOssUy7AdMNLyhFYHIXQbckXdPE6Oynv93F%2BLHX%2FQnJbmNJjAuRTfrAvQDwXxduHboWK%2BAMe460hUQ9RDfFwaqant8TRNkKdefp9ZQdKAmEEG6ntb3f0UeQdKaML%2F%2ByL8GOqUBotW1ls%2FcrQ7s9UDBYiipPCGqMOIh%2BEq8ea9MFQiUjwvJ2I67VghEZe%2FBzQnVlCfKH%2FILocoHRn5NjdztW1%2FXFq%2Fcbak4XSoWSWaVhndzUYGG9AgfPJqAC4ngCz6CO6TSg0xIqux4uxoWGVeBF8qUt0TQ9GbmuNYHr%2FUyuIWPNROL3kTEbchb4NYoQV8Xcehht%2F6vp6yMQv6hDNN7%2FQhOtbh292A2&X-Amz-Signature=7d4d1aeb85df3cc104409ebd0f5cf7e6c441c0cc938cd61136b0ac821579e60e&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVOD4SQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Y%2FSaIJ7PslPpLZpXlqKLf4KucC2T8oY5T5mUx5AJgIgFFzho%2FAlFbnTjwcjvJ5LrLgt5RxTPdSxaIlTKNu9rf8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDN4Lyxf0PtyfbXUU%2FSrcA9xcD1h5UrWa3jOQij3Wv8N3EO%2FKSYZvXuTWFFSz4NKGxy1MTC0BSF1iRV63VIKYbggwY7pY9ttkbZ16D2C%2BaQePfU8YkGazZ0A0fHaFF9hPJ8vL1xtp5Kzg19DlslCd%2F0RnOIwYjCMDRI87%2FhGPIZ30Z18Qt%2Ft8oFzpX2pxG11KkoOHCw54bzuNtmIY6WTsgjrs96WJhIyO%2Fqx4OAiY5S4qenY5YHz8Dr4cym85XZTCxacoQKgwywkUvfHR%2BVCaqQ1pFxgTX0N%2BQ5DWPYgj75i1hH8%2BnZvH48C%2FwmyNzvgHbLbEpxtRIMOnWw9e7sVbLm08U4S79QXal%2Brqfc6dW%2FNEFQfjJ4xZ1bWvOFvboZVmUtTwQfhJqwQqG6yfEL%2FsqhYMmd2C0%2BFwC0qUE2nR%2BtBMq4Rh8DQCLwOJ1CXBTaGJ3XLEeSOFkvrkLalSJRdQeh%2BQwL1mVSzyc82t38qLFVrlZOcMoo1Mmp0bvBmNAzgTUhYK8rnNAB8ACA4q7PhMXchOssUy7AdMNLyhFYHIXQbckXdPE6Oynv93F%2BLHX%2FQnJbmNJjAuRTfrAvQDwXxduHboWK%2BAMe460hUQ9RDfFwaqant8TRNkKdefp9ZQdKAmEEG6ntb3f0UeQdKaML%2F%2ByL8GOqUBotW1ls%2FcrQ7s9UDBYiipPCGqMOIh%2BEq8ea9MFQiUjwvJ2I67VghEZe%2FBzQnVlCfKH%2FILocoHRn5NjdztW1%2FXFq%2Fcbak4XSoWSWaVhndzUYGG9AgfPJqAC4ngCz6CO6TSg0xIqux4uxoWGVeBF8qUt0TQ9GbmuNYHr%2FUyuIWPNROL3kTEbchb4NYoQV8Xcehht%2F6vp6yMQv6hDNN7%2FQhOtbh292A2&X-Amz-Signature=74acdf61cdf587850861d27223d9dc847dd025e810a3435798d1c35cf9921684&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVOD4SQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Y%2FSaIJ7PslPpLZpXlqKLf4KucC2T8oY5T5mUx5AJgIgFFzho%2FAlFbnTjwcjvJ5LrLgt5RxTPdSxaIlTKNu9rf8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDN4Lyxf0PtyfbXUU%2FSrcA9xcD1h5UrWa3jOQij3Wv8N3EO%2FKSYZvXuTWFFSz4NKGxy1MTC0BSF1iRV63VIKYbggwY7pY9ttkbZ16D2C%2BaQePfU8YkGazZ0A0fHaFF9hPJ8vL1xtp5Kzg19DlslCd%2F0RnOIwYjCMDRI87%2FhGPIZ30Z18Qt%2Ft8oFzpX2pxG11KkoOHCw54bzuNtmIY6WTsgjrs96WJhIyO%2Fqx4OAiY5S4qenY5YHz8Dr4cym85XZTCxacoQKgwywkUvfHR%2BVCaqQ1pFxgTX0N%2BQ5DWPYgj75i1hH8%2BnZvH48C%2FwmyNzvgHbLbEpxtRIMOnWw9e7sVbLm08U4S79QXal%2Brqfc6dW%2FNEFQfjJ4xZ1bWvOFvboZVmUtTwQfhJqwQqG6yfEL%2FsqhYMmd2C0%2BFwC0qUE2nR%2BtBMq4Rh8DQCLwOJ1CXBTaGJ3XLEeSOFkvrkLalSJRdQeh%2BQwL1mVSzyc82t38qLFVrlZOcMoo1Mmp0bvBmNAzgTUhYK8rnNAB8ACA4q7PhMXchOssUy7AdMNLyhFYHIXQbckXdPE6Oynv93F%2BLHX%2FQnJbmNJjAuRTfrAvQDwXxduHboWK%2BAMe460hUQ9RDfFwaqant8TRNkKdefp9ZQdKAmEEG6ntb3f0UeQdKaML%2F%2ByL8GOqUBotW1ls%2FcrQ7s9UDBYiipPCGqMOIh%2BEq8ea9MFQiUjwvJ2I67VghEZe%2FBzQnVlCfKH%2FILocoHRn5NjdztW1%2FXFq%2Fcbak4XSoWSWaVhndzUYGG9AgfPJqAC4ngCz6CO6TSg0xIqux4uxoWGVeBF8qUt0TQ9GbmuNYHr%2FUyuIWPNROL3kTEbchb4NYoQV8Xcehht%2F6vp6yMQv6hDNN7%2FQhOtbh292A2&X-Amz-Signature=9d2bf969fc6bc0fb748f2a4751664743c7110a1b65967f00b6c6f8c3a749e0f6&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUVOD4SQ%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T121253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDr5Y%2FSaIJ7PslPpLZpXlqKLf4KucC2T8oY5T5mUx5AJgIgFFzho%2FAlFbnTjwcjvJ5LrLgt5RxTPdSxaIlTKNu9rf8q%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDN4Lyxf0PtyfbXUU%2FSrcA9xcD1h5UrWa3jOQij3Wv8N3EO%2FKSYZvXuTWFFSz4NKGxy1MTC0BSF1iRV63VIKYbggwY7pY9ttkbZ16D2C%2BaQePfU8YkGazZ0A0fHaFF9hPJ8vL1xtp5Kzg19DlslCd%2F0RnOIwYjCMDRI87%2FhGPIZ30Z18Qt%2Ft8oFzpX2pxG11KkoOHCw54bzuNtmIY6WTsgjrs96WJhIyO%2Fqx4OAiY5S4qenY5YHz8Dr4cym85XZTCxacoQKgwywkUvfHR%2BVCaqQ1pFxgTX0N%2BQ5DWPYgj75i1hH8%2BnZvH48C%2FwmyNzvgHbLbEpxtRIMOnWw9e7sVbLm08U4S79QXal%2Brqfc6dW%2FNEFQfjJ4xZ1bWvOFvboZVmUtTwQfhJqwQqG6yfEL%2FsqhYMmd2C0%2BFwC0qUE2nR%2BtBMq4Rh8DQCLwOJ1CXBTaGJ3XLEeSOFkvrkLalSJRdQeh%2BQwL1mVSzyc82t38qLFVrlZOcMoo1Mmp0bvBmNAzgTUhYK8rnNAB8ACA4q7PhMXchOssUy7AdMNLyhFYHIXQbckXdPE6Oynv93F%2BLHX%2FQnJbmNJjAuRTfrAvQDwXxduHboWK%2BAMe460hUQ9RDfFwaqant8TRNkKdefp9ZQdKAmEEG6ntb3f0UeQdKaML%2F%2ByL8GOqUBotW1ls%2FcrQ7s9UDBYiipPCGqMOIh%2BEq8ea9MFQiUjwvJ2I67VghEZe%2FBzQnVlCfKH%2FILocoHRn5NjdztW1%2FXFq%2Fcbak4XSoWSWaVhndzUYGG9AgfPJqAC4ngCz6CO6TSg0xIqux4uxoWGVeBF8qUt0TQ9GbmuNYHr%2FUyuIWPNROL3kTEbchb4NYoQV8Xcehht%2F6vp6yMQv6hDNN7%2FQhOtbh292A2&X-Amz-Signature=6fd4e9bedf524e141731f99c08b0aed3907e82a19726e93501e2dc6e70c1e780&X-Amz-SignedHeaders=host&x-id=GetObject)
