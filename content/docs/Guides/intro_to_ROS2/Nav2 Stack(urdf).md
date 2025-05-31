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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZRBC2A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaB6hfVo7D32N8AQ5rtpKeYzyGzRiv2qf9hGlbjK9ipAiEA2plE1MVLq%2FuDTLQ%2FCbXzDkDFiZ%2F03MpaqA%2BWlDVVsD0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgu9dXAtxP281dZMircA%2BVTQFBj5tc%2Fg2ol0rVkpjZc9sBY2L3zZxvLbhZ%2FBsA7b4wHBFtICQJktLmrH7dldiBN5UUzhJ5%2FeWnCBeczUWiW03GR4mUTzplChPZPBZUcGmnJoDHNTe84YagNKd7MMi87gTY%2B0ve3lrtU5QG3WZzXSjJ2FXiSQF9WKWl06Y%2B6X%2FVjfc9Btv%2FexjefpF9iQbTEOwBj0IgUDPgIkfV7%2B4BzllBK4hXcJ5dwmPP%2FhxTNTbk8km9cVXSfXZi3dqFMpowAIlbI5T%2BCr2GMbFvwd2BChtX5oASGTXCTaYKCxmZ%2B4Qlj8MQ%2FaDYTve9B8NycgxdgIcoe7hQtwszwUoIp31VIpAapEYAAdRPAwRQiv%2FcXtIyf7PlD%2BRCRGvoZmTxFoaDBJL5b%2Fna7xGpRdeictNm%2BTBvgv1nvHRZtitOogTdNre1%2B7uycKSJ3ijAMh3PHMIf4qsHRyULNc8L1QNxzYX0CihuM5cpOePJha6FXzBhEGbqKOUU8zbIVezE64H3QeAbtGXYl4nuNTOYJe6bLfpJL3s9XHxisbYCOxyVzN1SIb1m3QQgwZaKWoZ%2BufDkWltPTqBUU8l%2Be22CRmE2BIYv2s%2Fi9etBP%2FrmH6%2BKkd9qaZuDFT1ou9CdNjuiNMIDl6cEGOqUB3L1ZKt6VSyXob2XSbINYX846JxOBgPBM%2FqOvwcLQHb0gemNJ18THvAK6hkQkChhLlAsk%2BHGH01Ips%2Bcz3ekaaA2bxHAGKOIpWcOb8hvMVc6OYp1a9nKJFrI722yoIt%2BWVpoffFH6al8wHDqf4MwZbAOJiJAOqJgUtFm0XPzE0%2BoF0Sqbhrc5gPo2%2Ff9zDz4J6yC8tniunSsRfnCtnXHHdATi0CLw&X-Amz-Signature=b23f050ad7091caa5f2f78dcb191c32ecb66b7d94cf1f4bc80b00ad2629d8457&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZRBC2A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaB6hfVo7D32N8AQ5rtpKeYzyGzRiv2qf9hGlbjK9ipAiEA2plE1MVLq%2FuDTLQ%2FCbXzDkDFiZ%2F03MpaqA%2BWlDVVsD0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgu9dXAtxP281dZMircA%2BVTQFBj5tc%2Fg2ol0rVkpjZc9sBY2L3zZxvLbhZ%2FBsA7b4wHBFtICQJktLmrH7dldiBN5UUzhJ5%2FeWnCBeczUWiW03GR4mUTzplChPZPBZUcGmnJoDHNTe84YagNKd7MMi87gTY%2B0ve3lrtU5QG3WZzXSjJ2FXiSQF9WKWl06Y%2B6X%2FVjfc9Btv%2FexjefpF9iQbTEOwBj0IgUDPgIkfV7%2B4BzllBK4hXcJ5dwmPP%2FhxTNTbk8km9cVXSfXZi3dqFMpowAIlbI5T%2BCr2GMbFvwd2BChtX5oASGTXCTaYKCxmZ%2B4Qlj8MQ%2FaDYTve9B8NycgxdgIcoe7hQtwszwUoIp31VIpAapEYAAdRPAwRQiv%2FcXtIyf7PlD%2BRCRGvoZmTxFoaDBJL5b%2Fna7xGpRdeictNm%2BTBvgv1nvHRZtitOogTdNre1%2B7uycKSJ3ijAMh3PHMIf4qsHRyULNc8L1QNxzYX0CihuM5cpOePJha6FXzBhEGbqKOUU8zbIVezE64H3QeAbtGXYl4nuNTOYJe6bLfpJL3s9XHxisbYCOxyVzN1SIb1m3QQgwZaKWoZ%2BufDkWltPTqBUU8l%2Be22CRmE2BIYv2s%2Fi9etBP%2FrmH6%2BKkd9qaZuDFT1ou9CdNjuiNMIDl6cEGOqUB3L1ZKt6VSyXob2XSbINYX846JxOBgPBM%2FqOvwcLQHb0gemNJ18THvAK6hkQkChhLlAsk%2BHGH01Ips%2Bcz3ekaaA2bxHAGKOIpWcOb8hvMVc6OYp1a9nKJFrI722yoIt%2BWVpoffFH6al8wHDqf4MwZbAOJiJAOqJgUtFm0XPzE0%2BoF0Sqbhrc5gPo2%2Ff9zDz4J6yC8tniunSsRfnCtnXHHdATi0CLw&X-Amz-Signature=59e86facfa7dc3412fb8560ea2879a6590622c20a26cf674170123f69b2ce131&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZRBC2A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaB6hfVo7D32N8AQ5rtpKeYzyGzRiv2qf9hGlbjK9ipAiEA2plE1MVLq%2FuDTLQ%2FCbXzDkDFiZ%2F03MpaqA%2BWlDVVsD0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgu9dXAtxP281dZMircA%2BVTQFBj5tc%2Fg2ol0rVkpjZc9sBY2L3zZxvLbhZ%2FBsA7b4wHBFtICQJktLmrH7dldiBN5UUzhJ5%2FeWnCBeczUWiW03GR4mUTzplChPZPBZUcGmnJoDHNTe84YagNKd7MMi87gTY%2B0ve3lrtU5QG3WZzXSjJ2FXiSQF9WKWl06Y%2B6X%2FVjfc9Btv%2FexjefpF9iQbTEOwBj0IgUDPgIkfV7%2B4BzllBK4hXcJ5dwmPP%2FhxTNTbk8km9cVXSfXZi3dqFMpowAIlbI5T%2BCr2GMbFvwd2BChtX5oASGTXCTaYKCxmZ%2B4Qlj8MQ%2FaDYTve9B8NycgxdgIcoe7hQtwszwUoIp31VIpAapEYAAdRPAwRQiv%2FcXtIyf7PlD%2BRCRGvoZmTxFoaDBJL5b%2Fna7xGpRdeictNm%2BTBvgv1nvHRZtitOogTdNre1%2B7uycKSJ3ijAMh3PHMIf4qsHRyULNc8L1QNxzYX0CihuM5cpOePJha6FXzBhEGbqKOUU8zbIVezE64H3QeAbtGXYl4nuNTOYJe6bLfpJL3s9XHxisbYCOxyVzN1SIb1m3QQgwZaKWoZ%2BufDkWltPTqBUU8l%2Be22CRmE2BIYv2s%2Fi9etBP%2FrmH6%2BKkd9qaZuDFT1ou9CdNjuiNMIDl6cEGOqUB3L1ZKt6VSyXob2XSbINYX846JxOBgPBM%2FqOvwcLQHb0gemNJ18THvAK6hkQkChhLlAsk%2BHGH01Ips%2Bcz3ekaaA2bxHAGKOIpWcOb8hvMVc6OYp1a9nKJFrI722yoIt%2BWVpoffFH6al8wHDqf4MwZbAOJiJAOqJgUtFm0XPzE0%2BoF0Sqbhrc5gPo2%2Ff9zDz4J6yC8tniunSsRfnCtnXHHdATi0CLw&X-Amz-Signature=ef811ca83bfe1113d7fe8d725b1ad43bb2a9e076cd09b1d84ee9f76bc7b8a3b2&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZRBC2A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaB6hfVo7D32N8AQ5rtpKeYzyGzRiv2qf9hGlbjK9ipAiEA2plE1MVLq%2FuDTLQ%2FCbXzDkDFiZ%2F03MpaqA%2BWlDVVsD0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgu9dXAtxP281dZMircA%2BVTQFBj5tc%2Fg2ol0rVkpjZc9sBY2L3zZxvLbhZ%2FBsA7b4wHBFtICQJktLmrH7dldiBN5UUzhJ5%2FeWnCBeczUWiW03GR4mUTzplChPZPBZUcGmnJoDHNTe84YagNKd7MMi87gTY%2B0ve3lrtU5QG3WZzXSjJ2FXiSQF9WKWl06Y%2B6X%2FVjfc9Btv%2FexjefpF9iQbTEOwBj0IgUDPgIkfV7%2B4BzllBK4hXcJ5dwmPP%2FhxTNTbk8km9cVXSfXZi3dqFMpowAIlbI5T%2BCr2GMbFvwd2BChtX5oASGTXCTaYKCxmZ%2B4Qlj8MQ%2FaDYTve9B8NycgxdgIcoe7hQtwszwUoIp31VIpAapEYAAdRPAwRQiv%2FcXtIyf7PlD%2BRCRGvoZmTxFoaDBJL5b%2Fna7xGpRdeictNm%2BTBvgv1nvHRZtitOogTdNre1%2B7uycKSJ3ijAMh3PHMIf4qsHRyULNc8L1QNxzYX0CihuM5cpOePJha6FXzBhEGbqKOUU8zbIVezE64H3QeAbtGXYl4nuNTOYJe6bLfpJL3s9XHxisbYCOxyVzN1SIb1m3QQgwZaKWoZ%2BufDkWltPTqBUU8l%2Be22CRmE2BIYv2s%2Fi9etBP%2FrmH6%2BKkd9qaZuDFT1ou9CdNjuiNMIDl6cEGOqUB3L1ZKt6VSyXob2XSbINYX846JxOBgPBM%2FqOvwcLQHb0gemNJ18THvAK6hkQkChhLlAsk%2BHGH01Ips%2Bcz3ekaaA2bxHAGKOIpWcOb8hvMVc6OYp1a9nKJFrI722yoIt%2BWVpoffFH6al8wHDqf4MwZbAOJiJAOqJgUtFm0XPzE0%2BoF0Sqbhrc5gPo2%2Ff9zDz4J6yC8tniunSsRfnCtnXHHdATi0CLw&X-Amz-Signature=44357a1295aa2e6d20cb8e8936a60f064b00d603fa3bae3781e4ef40c6813b00&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZRBC2A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaB6hfVo7D32N8AQ5rtpKeYzyGzRiv2qf9hGlbjK9ipAiEA2plE1MVLq%2FuDTLQ%2FCbXzDkDFiZ%2F03MpaqA%2BWlDVVsD0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgu9dXAtxP281dZMircA%2BVTQFBj5tc%2Fg2ol0rVkpjZc9sBY2L3zZxvLbhZ%2FBsA7b4wHBFtICQJktLmrH7dldiBN5UUzhJ5%2FeWnCBeczUWiW03GR4mUTzplChPZPBZUcGmnJoDHNTe84YagNKd7MMi87gTY%2B0ve3lrtU5QG3WZzXSjJ2FXiSQF9WKWl06Y%2B6X%2FVjfc9Btv%2FexjefpF9iQbTEOwBj0IgUDPgIkfV7%2B4BzllBK4hXcJ5dwmPP%2FhxTNTbk8km9cVXSfXZi3dqFMpowAIlbI5T%2BCr2GMbFvwd2BChtX5oASGTXCTaYKCxmZ%2B4Qlj8MQ%2FaDYTve9B8NycgxdgIcoe7hQtwszwUoIp31VIpAapEYAAdRPAwRQiv%2FcXtIyf7PlD%2BRCRGvoZmTxFoaDBJL5b%2Fna7xGpRdeictNm%2BTBvgv1nvHRZtitOogTdNre1%2B7uycKSJ3ijAMh3PHMIf4qsHRyULNc8L1QNxzYX0CihuM5cpOePJha6FXzBhEGbqKOUU8zbIVezE64H3QeAbtGXYl4nuNTOYJe6bLfpJL3s9XHxisbYCOxyVzN1SIb1m3QQgwZaKWoZ%2BufDkWltPTqBUU8l%2Be22CRmE2BIYv2s%2Fi9etBP%2FrmH6%2BKkd9qaZuDFT1ou9CdNjuiNMIDl6cEGOqUB3L1ZKt6VSyXob2XSbINYX846JxOBgPBM%2FqOvwcLQHb0gemNJ18THvAK6hkQkChhLlAsk%2BHGH01Ips%2Bcz3ekaaA2bxHAGKOIpWcOb8hvMVc6OYp1a9nKJFrI722yoIt%2BWVpoffFH6al8wHDqf4MwZbAOJiJAOqJgUtFm0XPzE0%2BoF0Sqbhrc5gPo2%2Ff9zDz4J6yC8tniunSsRfnCtnXHHdATi0CLw&X-Amz-Signature=c250a05b971622bc8bc7775bcf2b6f25c0463bfde27ed0eeba0cf9590e629e24&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLZRBC2A%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAaB6hfVo7D32N8AQ5rtpKeYzyGzRiv2qf9hGlbjK9ipAiEA2plE1MVLq%2FuDTLQ%2FCbXzDkDFiZ%2F03MpaqA%2BWlDVVsD0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEgu9dXAtxP281dZMircA%2BVTQFBj5tc%2Fg2ol0rVkpjZc9sBY2L3zZxvLbhZ%2FBsA7b4wHBFtICQJktLmrH7dldiBN5UUzhJ5%2FeWnCBeczUWiW03GR4mUTzplChPZPBZUcGmnJoDHNTe84YagNKd7MMi87gTY%2B0ve3lrtU5QG3WZzXSjJ2FXiSQF9WKWl06Y%2B6X%2FVjfc9Btv%2FexjefpF9iQbTEOwBj0IgUDPgIkfV7%2B4BzllBK4hXcJ5dwmPP%2FhxTNTbk8km9cVXSfXZi3dqFMpowAIlbI5T%2BCr2GMbFvwd2BChtX5oASGTXCTaYKCxmZ%2B4Qlj8MQ%2FaDYTve9B8NycgxdgIcoe7hQtwszwUoIp31VIpAapEYAAdRPAwRQiv%2FcXtIyf7PlD%2BRCRGvoZmTxFoaDBJL5b%2Fna7xGpRdeictNm%2BTBvgv1nvHRZtitOogTdNre1%2B7uycKSJ3ijAMh3PHMIf4qsHRyULNc8L1QNxzYX0CihuM5cpOePJha6FXzBhEGbqKOUU8zbIVezE64H3QeAbtGXYl4nuNTOYJe6bLfpJL3s9XHxisbYCOxyVzN1SIb1m3QQgwZaKWoZ%2BufDkWltPTqBUU8l%2Be22CRmE2BIYv2s%2Fi9etBP%2FrmH6%2BKkd9qaZuDFT1ou9CdNjuiNMIDl6cEGOqUB3L1ZKt6VSyXob2XSbINYX846JxOBgPBM%2FqOvwcLQHb0gemNJ18THvAK6hkQkChhLlAsk%2BHGH01Ips%2Bcz3ekaaA2bxHAGKOIpWcOb8hvMVc6OYp1a9nKJFrI722yoIt%2BWVpoffFH6al8wHDqf4MwZbAOJiJAOqJgUtFm0XPzE0%2BoF0Sqbhrc5gPo2%2Ff9zDz4J6yC8tniunSsRfnCtnXHHdATi0CLw&X-Amz-Signature=e490d1a3d42e5adb613ccec9cbe44fb4b1e152e1570f43c98522b5f51b9b5ac0&X-Amz-SignedHeaders=host&x-id=GetObject)
