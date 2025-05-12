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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJISV6RK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBT12vM61TXwf6cAGXH8lvldkepQKkc%2B5nbUZkOo7OvhAiBR2IfyakmlXVvUmM2nS6MsYlNUPjCNnYMeJBiR6NFnCSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzy4St2oDYY9mWU57KtwD%2FRUJFHnEe3OPi4WgZkxSckMP8HGkZWebVBUazsenWKuHCZ7keB3DZd%2B9B9bxx4F76zrg6H5wTTXBq3vfN01lbjbpfbwhBZgheITAZgsYLjBq3G3lZGFdUuKB8W6SxJMLhIdJMQ%2B5VHC%2B86S6C2KcfsOdw4eFo7CVdBc40gMi7PNB6tDUjC7iC2ddE%2Fgv0JZKzpYkOntuGDNOXUjUNwq2fqJjy0q7LE5HluzwbB17Cj3nvJWl%2BCt4rg7iHIsFE%2FZXvUpADAnwFm1PWCKV3TW3MzkgjpL60XIB3QZgixpgDY07%2B9sq%2BTOq5NQiDK38fJsBMa2rZoYjRUHyxQIpgK379Vk9GozOHVuxiJ48eT3bRlgM89fZ9qXfpvB61dYYvFs1kb0iMe46g%2BGsSDjBZAnwsEd66dY%2FDqVmdU9V3v%2BdGXm2V%2FabN%2B5WF8SErE6Ab4zpXmfZodjFAcwR7p%2F48e8hWYOsalysX3KPSYhdH4MHT2%2BH6m7IRRNV5xZi5fTPRATup9MZIBT2%2BwZh4KWpQPH5KQsEh5QxdpD20iNQh6Y659NeCHdNbW%2B2n3UqxqPCmIxzs0aVMb5KyQa%2FT2lI4L2UQe0c7QJLGfdn7EwTMxfArdWWn%2Fbe3rPSvfa8iQswpeyHwQY6pgHyZ5wthId5VWnv%2BW%2BL2zDGsTNG7IQdx6NBrPpwXnACR6SC6S%2BbJuY5%2B6u2GQ7TdIBtuK9GfLcwe%2BN9j8hRjGDmTdYLYybfmK%2FfL5E8%2BiVp5Qd5%2BXqWZFZOXrplcLy8HIgSpplY60Ss%2BtpaEMPtCzsVvOuLmNmYA9O%2BQ9UT9vxWc%2Bhw%2BwFQpBYVZyuhYMM%2BMMufIlJYRvkXTqMKzisbvXD3a22Qavx6&X-Amz-Signature=9f7a81d27f67eb44db546aeb47095fbe43da257c9e307207b0168fd291a7b52c&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJISV6RK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBT12vM61TXwf6cAGXH8lvldkepQKkc%2B5nbUZkOo7OvhAiBR2IfyakmlXVvUmM2nS6MsYlNUPjCNnYMeJBiR6NFnCSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzy4St2oDYY9mWU57KtwD%2FRUJFHnEe3OPi4WgZkxSckMP8HGkZWebVBUazsenWKuHCZ7keB3DZd%2B9B9bxx4F76zrg6H5wTTXBq3vfN01lbjbpfbwhBZgheITAZgsYLjBq3G3lZGFdUuKB8W6SxJMLhIdJMQ%2B5VHC%2B86S6C2KcfsOdw4eFo7CVdBc40gMi7PNB6tDUjC7iC2ddE%2Fgv0JZKzpYkOntuGDNOXUjUNwq2fqJjy0q7LE5HluzwbB17Cj3nvJWl%2BCt4rg7iHIsFE%2FZXvUpADAnwFm1PWCKV3TW3MzkgjpL60XIB3QZgixpgDY07%2B9sq%2BTOq5NQiDK38fJsBMa2rZoYjRUHyxQIpgK379Vk9GozOHVuxiJ48eT3bRlgM89fZ9qXfpvB61dYYvFs1kb0iMe46g%2BGsSDjBZAnwsEd66dY%2FDqVmdU9V3v%2BdGXm2V%2FabN%2B5WF8SErE6Ab4zpXmfZodjFAcwR7p%2F48e8hWYOsalysX3KPSYhdH4MHT2%2BH6m7IRRNV5xZi5fTPRATup9MZIBT2%2BwZh4KWpQPH5KQsEh5QxdpD20iNQh6Y659NeCHdNbW%2B2n3UqxqPCmIxzs0aVMb5KyQa%2FT2lI4L2UQe0c7QJLGfdn7EwTMxfArdWWn%2Fbe3rPSvfa8iQswpeyHwQY6pgHyZ5wthId5VWnv%2BW%2BL2zDGsTNG7IQdx6NBrPpwXnACR6SC6S%2BbJuY5%2B6u2GQ7TdIBtuK9GfLcwe%2BN9j8hRjGDmTdYLYybfmK%2FfL5E8%2BiVp5Qd5%2BXqWZFZOXrplcLy8HIgSpplY60Ss%2BtpaEMPtCzsVvOuLmNmYA9O%2BQ9UT9vxWc%2Bhw%2BwFQpBYVZyuhYMM%2BMMufIlJYRvkXTqMKzisbvXD3a22Qavx6&X-Amz-Signature=18be876e6b9753ce2af3f39a3cdebbdfc19c725f1226fdb7ffac6933295dda17&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJISV6RK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBT12vM61TXwf6cAGXH8lvldkepQKkc%2B5nbUZkOo7OvhAiBR2IfyakmlXVvUmM2nS6MsYlNUPjCNnYMeJBiR6NFnCSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzy4St2oDYY9mWU57KtwD%2FRUJFHnEe3OPi4WgZkxSckMP8HGkZWebVBUazsenWKuHCZ7keB3DZd%2B9B9bxx4F76zrg6H5wTTXBq3vfN01lbjbpfbwhBZgheITAZgsYLjBq3G3lZGFdUuKB8W6SxJMLhIdJMQ%2B5VHC%2B86S6C2KcfsOdw4eFo7CVdBc40gMi7PNB6tDUjC7iC2ddE%2Fgv0JZKzpYkOntuGDNOXUjUNwq2fqJjy0q7LE5HluzwbB17Cj3nvJWl%2BCt4rg7iHIsFE%2FZXvUpADAnwFm1PWCKV3TW3MzkgjpL60XIB3QZgixpgDY07%2B9sq%2BTOq5NQiDK38fJsBMa2rZoYjRUHyxQIpgK379Vk9GozOHVuxiJ48eT3bRlgM89fZ9qXfpvB61dYYvFs1kb0iMe46g%2BGsSDjBZAnwsEd66dY%2FDqVmdU9V3v%2BdGXm2V%2FabN%2B5WF8SErE6Ab4zpXmfZodjFAcwR7p%2F48e8hWYOsalysX3KPSYhdH4MHT2%2BH6m7IRRNV5xZi5fTPRATup9MZIBT2%2BwZh4KWpQPH5KQsEh5QxdpD20iNQh6Y659NeCHdNbW%2B2n3UqxqPCmIxzs0aVMb5KyQa%2FT2lI4L2UQe0c7QJLGfdn7EwTMxfArdWWn%2Fbe3rPSvfa8iQswpeyHwQY6pgHyZ5wthId5VWnv%2BW%2BL2zDGsTNG7IQdx6NBrPpwXnACR6SC6S%2BbJuY5%2B6u2GQ7TdIBtuK9GfLcwe%2BN9j8hRjGDmTdYLYybfmK%2FfL5E8%2BiVp5Qd5%2BXqWZFZOXrplcLy8HIgSpplY60Ss%2BtpaEMPtCzsVvOuLmNmYA9O%2BQ9UT9vxWc%2Bhw%2BwFQpBYVZyuhYMM%2BMMufIlJYRvkXTqMKzisbvXD3a22Qavx6&X-Amz-Signature=0e63101782eb3b3a4828b82fab5011d2b0595bcabe88d2c2a568414430aae600&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJISV6RK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBT12vM61TXwf6cAGXH8lvldkepQKkc%2B5nbUZkOo7OvhAiBR2IfyakmlXVvUmM2nS6MsYlNUPjCNnYMeJBiR6NFnCSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzy4St2oDYY9mWU57KtwD%2FRUJFHnEe3OPi4WgZkxSckMP8HGkZWebVBUazsenWKuHCZ7keB3DZd%2B9B9bxx4F76zrg6H5wTTXBq3vfN01lbjbpfbwhBZgheITAZgsYLjBq3G3lZGFdUuKB8W6SxJMLhIdJMQ%2B5VHC%2B86S6C2KcfsOdw4eFo7CVdBc40gMi7PNB6tDUjC7iC2ddE%2Fgv0JZKzpYkOntuGDNOXUjUNwq2fqJjy0q7LE5HluzwbB17Cj3nvJWl%2BCt4rg7iHIsFE%2FZXvUpADAnwFm1PWCKV3TW3MzkgjpL60XIB3QZgixpgDY07%2B9sq%2BTOq5NQiDK38fJsBMa2rZoYjRUHyxQIpgK379Vk9GozOHVuxiJ48eT3bRlgM89fZ9qXfpvB61dYYvFs1kb0iMe46g%2BGsSDjBZAnwsEd66dY%2FDqVmdU9V3v%2BdGXm2V%2FabN%2B5WF8SErE6Ab4zpXmfZodjFAcwR7p%2F48e8hWYOsalysX3KPSYhdH4MHT2%2BH6m7IRRNV5xZi5fTPRATup9MZIBT2%2BwZh4KWpQPH5KQsEh5QxdpD20iNQh6Y659NeCHdNbW%2B2n3UqxqPCmIxzs0aVMb5KyQa%2FT2lI4L2UQe0c7QJLGfdn7EwTMxfArdWWn%2Fbe3rPSvfa8iQswpeyHwQY6pgHyZ5wthId5VWnv%2BW%2BL2zDGsTNG7IQdx6NBrPpwXnACR6SC6S%2BbJuY5%2B6u2GQ7TdIBtuK9GfLcwe%2BN9j8hRjGDmTdYLYybfmK%2FfL5E8%2BiVp5Qd5%2BXqWZFZOXrplcLy8HIgSpplY60Ss%2BtpaEMPtCzsVvOuLmNmYA9O%2BQ9UT9vxWc%2Bhw%2BwFQpBYVZyuhYMM%2BMMufIlJYRvkXTqMKzisbvXD3a22Qavx6&X-Amz-Signature=ee9809c4d4cec6d6703978726d1e2bded9034f012e0355d80f6fa7bf96abfffa&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJISV6RK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBT12vM61TXwf6cAGXH8lvldkepQKkc%2B5nbUZkOo7OvhAiBR2IfyakmlXVvUmM2nS6MsYlNUPjCNnYMeJBiR6NFnCSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzy4St2oDYY9mWU57KtwD%2FRUJFHnEe3OPi4WgZkxSckMP8HGkZWebVBUazsenWKuHCZ7keB3DZd%2B9B9bxx4F76zrg6H5wTTXBq3vfN01lbjbpfbwhBZgheITAZgsYLjBq3G3lZGFdUuKB8W6SxJMLhIdJMQ%2B5VHC%2B86S6C2KcfsOdw4eFo7CVdBc40gMi7PNB6tDUjC7iC2ddE%2Fgv0JZKzpYkOntuGDNOXUjUNwq2fqJjy0q7LE5HluzwbB17Cj3nvJWl%2BCt4rg7iHIsFE%2FZXvUpADAnwFm1PWCKV3TW3MzkgjpL60XIB3QZgixpgDY07%2B9sq%2BTOq5NQiDK38fJsBMa2rZoYjRUHyxQIpgK379Vk9GozOHVuxiJ48eT3bRlgM89fZ9qXfpvB61dYYvFs1kb0iMe46g%2BGsSDjBZAnwsEd66dY%2FDqVmdU9V3v%2BdGXm2V%2FabN%2B5WF8SErE6Ab4zpXmfZodjFAcwR7p%2F48e8hWYOsalysX3KPSYhdH4MHT2%2BH6m7IRRNV5xZi5fTPRATup9MZIBT2%2BwZh4KWpQPH5KQsEh5QxdpD20iNQh6Y659NeCHdNbW%2B2n3UqxqPCmIxzs0aVMb5KyQa%2FT2lI4L2UQe0c7QJLGfdn7EwTMxfArdWWn%2Fbe3rPSvfa8iQswpeyHwQY6pgHyZ5wthId5VWnv%2BW%2BL2zDGsTNG7IQdx6NBrPpwXnACR6SC6S%2BbJuY5%2B6u2GQ7TdIBtuK9GfLcwe%2BN9j8hRjGDmTdYLYybfmK%2FfL5E8%2BiVp5Qd5%2BXqWZFZOXrplcLy8HIgSpplY60Ss%2BtpaEMPtCzsVvOuLmNmYA9O%2BQ9UT9vxWc%2Bhw%2BwFQpBYVZyuhYMM%2BMMufIlJYRvkXTqMKzisbvXD3a22Qavx6&X-Amz-Signature=07ccb7e434b36abfd68033020face6816ad193958dcb8c823ebe5d0fca4c08da&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJISV6RK%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T140945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJGMEQCIBT12vM61TXwf6cAGXH8lvldkepQKkc%2B5nbUZkOo7OvhAiBR2IfyakmlXVvUmM2nS6MsYlNUPjCNnYMeJBiR6NFnCSqIBAjX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMzy4St2oDYY9mWU57KtwD%2FRUJFHnEe3OPi4WgZkxSckMP8HGkZWebVBUazsenWKuHCZ7keB3DZd%2B9B9bxx4F76zrg6H5wTTXBq3vfN01lbjbpfbwhBZgheITAZgsYLjBq3G3lZGFdUuKB8W6SxJMLhIdJMQ%2B5VHC%2B86S6C2KcfsOdw4eFo7CVdBc40gMi7PNB6tDUjC7iC2ddE%2Fgv0JZKzpYkOntuGDNOXUjUNwq2fqJjy0q7LE5HluzwbB17Cj3nvJWl%2BCt4rg7iHIsFE%2FZXvUpADAnwFm1PWCKV3TW3MzkgjpL60XIB3QZgixpgDY07%2B9sq%2BTOq5NQiDK38fJsBMa2rZoYjRUHyxQIpgK379Vk9GozOHVuxiJ48eT3bRlgM89fZ9qXfpvB61dYYvFs1kb0iMe46g%2BGsSDjBZAnwsEd66dY%2FDqVmdU9V3v%2BdGXm2V%2FabN%2B5WF8SErE6Ab4zpXmfZodjFAcwR7p%2F48e8hWYOsalysX3KPSYhdH4MHT2%2BH6m7IRRNV5xZi5fTPRATup9MZIBT2%2BwZh4KWpQPH5KQsEh5QxdpD20iNQh6Y659NeCHdNbW%2B2n3UqxqPCmIxzs0aVMb5KyQa%2FT2lI4L2UQe0c7QJLGfdn7EwTMxfArdWWn%2Fbe3rPSvfa8iQswpeyHwQY6pgHyZ5wthId5VWnv%2BW%2BL2zDGsTNG7IQdx6NBrPpwXnACR6SC6S%2BbJuY5%2B6u2GQ7TdIBtuK9GfLcwe%2BN9j8hRjGDmTdYLYybfmK%2FfL5E8%2BiVp5Qd5%2BXqWZFZOXrplcLy8HIgSpplY60Ss%2BtpaEMPtCzsVvOuLmNmYA9O%2BQ9UT9vxWc%2Bhw%2BwFQpBYVZyuhYMM%2BMMufIlJYRvkXTqMKzisbvXD3a22Qavx6&X-Amz-Signature=bc441a8fa7eed93278345d4dad8e7a9286e95d40f7f21f68780fafceb11a5fc7&X-Amz-SignedHeaders=host&x-id=GetObject)
