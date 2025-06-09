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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZNVFAG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvJA1KRwGSUR%2FYuz7uNw9MtGYV9SWXOS7Y%2FcW7vcZwJAiAGUtmDSnZxdUoOsiuSFdifAhZCeDPuJ4T3my2CdkenlSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSsjfTWGrC4BSQvX3KtwDg17SWOdlWVmXRzqvu53VZIp82iKs%2B9t%2BnJl%2FEaGAPW4AEkcs3vJW%2BtRAeaNELcCOO%2BWrK3Q29aTCtOtJIOMEdjP3q%2F5z0tWr4lBoJ1nZnTy1CMqUFUuqSIDcC7YGAJOIbvexE61m0WP%2BGvMeoyyR5tFvI%2BuINcaQz3faTQp%2FeMBIv6sf%2Ft6FVrmDY97z8eQYbkBbHs4jJhfzBVRpTIv7QYYaorqv2oY%2BVHsFJ8QMA5YPwLgy%2Fzj8iRwo0zuN9Aopql86S8A3u69sx2RYyuR%2BmscjJ5ojY7NoESntkvo5pBwiWnR1Bf7LFjOXAv2%2F7br39fVE8eKG0UboM3LV2RfGLkI2n5CD0fSGEJmTjKW1bIg4WYfFlA%2Bint3YkhfQZB8GUA89Gvg%2F605Inl8ACRcAdziq5tV39UNlDFyFj0LN8VpI6XgxNeXf3giWrFyDavUWJZl6QgP89GQF3Wac54sYaydDrzE2h0qg0DgEyZ3%2F96Z9rtB%2F5N1P1gliOZZIGIfFEe1JEUXu74BpKi33iAH%2BJIiQ44phGg9g%2F9FJAcZXh2ZFnEgVpKMQXHimqjTGv85UQTEQWrbxNmdgfNmciGPIWEd9BQ5qYtTDd9BEI%2FpGHxKK6XeYKhbyTu2LMiYw4p2bwgY6pgGo57QENqdww%2F4P21lW39vsM3nyjV85CypKO1hc5wJpfuQZqqF2IJqmdUo5ghqhnaXyLRf3JY581ooydxtm8GFU9KXtKrAflSKMx4zGNSCcPZapy3lO9t63sWH4HC74twkg4a0ANCzTgZXRC4oGXMZdr3CtPZyl7YENvLz7OKbR5HohVClHItJPptRA95bwsnJMX064y8jrUNXuUnoB7N3hw5UvORw2&X-Amz-Signature=f41e60fb5e15cc0b09e1df8910ad03a0956d266f0395f5df3ff33839ce1efb32&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZNVFAG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvJA1KRwGSUR%2FYuz7uNw9MtGYV9SWXOS7Y%2FcW7vcZwJAiAGUtmDSnZxdUoOsiuSFdifAhZCeDPuJ4T3my2CdkenlSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSsjfTWGrC4BSQvX3KtwDg17SWOdlWVmXRzqvu53VZIp82iKs%2B9t%2BnJl%2FEaGAPW4AEkcs3vJW%2BtRAeaNELcCOO%2BWrK3Q29aTCtOtJIOMEdjP3q%2F5z0tWr4lBoJ1nZnTy1CMqUFUuqSIDcC7YGAJOIbvexE61m0WP%2BGvMeoyyR5tFvI%2BuINcaQz3faTQp%2FeMBIv6sf%2Ft6FVrmDY97z8eQYbkBbHs4jJhfzBVRpTIv7QYYaorqv2oY%2BVHsFJ8QMA5YPwLgy%2Fzj8iRwo0zuN9Aopql86S8A3u69sx2RYyuR%2BmscjJ5ojY7NoESntkvo5pBwiWnR1Bf7LFjOXAv2%2F7br39fVE8eKG0UboM3LV2RfGLkI2n5CD0fSGEJmTjKW1bIg4WYfFlA%2Bint3YkhfQZB8GUA89Gvg%2F605Inl8ACRcAdziq5tV39UNlDFyFj0LN8VpI6XgxNeXf3giWrFyDavUWJZl6QgP89GQF3Wac54sYaydDrzE2h0qg0DgEyZ3%2F96Z9rtB%2F5N1P1gliOZZIGIfFEe1JEUXu74BpKi33iAH%2BJIiQ44phGg9g%2F9FJAcZXh2ZFnEgVpKMQXHimqjTGv85UQTEQWrbxNmdgfNmciGPIWEd9BQ5qYtTDd9BEI%2FpGHxKK6XeYKhbyTu2LMiYw4p2bwgY6pgGo57QENqdww%2F4P21lW39vsM3nyjV85CypKO1hc5wJpfuQZqqF2IJqmdUo5ghqhnaXyLRf3JY581ooydxtm8GFU9KXtKrAflSKMx4zGNSCcPZapy3lO9t63sWH4HC74twkg4a0ANCzTgZXRC4oGXMZdr3CtPZyl7YENvLz7OKbR5HohVClHItJPptRA95bwsnJMX064y8jrUNXuUnoB7N3hw5UvORw2&X-Amz-Signature=b020d3f2e6d8dcdae43511b3fc2cf915d2d3cf9d2501d9cedf008fe6bcfd94c2&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZNVFAG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvJA1KRwGSUR%2FYuz7uNw9MtGYV9SWXOS7Y%2FcW7vcZwJAiAGUtmDSnZxdUoOsiuSFdifAhZCeDPuJ4T3my2CdkenlSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSsjfTWGrC4BSQvX3KtwDg17SWOdlWVmXRzqvu53VZIp82iKs%2B9t%2BnJl%2FEaGAPW4AEkcs3vJW%2BtRAeaNELcCOO%2BWrK3Q29aTCtOtJIOMEdjP3q%2F5z0tWr4lBoJ1nZnTy1CMqUFUuqSIDcC7YGAJOIbvexE61m0WP%2BGvMeoyyR5tFvI%2BuINcaQz3faTQp%2FeMBIv6sf%2Ft6FVrmDY97z8eQYbkBbHs4jJhfzBVRpTIv7QYYaorqv2oY%2BVHsFJ8QMA5YPwLgy%2Fzj8iRwo0zuN9Aopql86S8A3u69sx2RYyuR%2BmscjJ5ojY7NoESntkvo5pBwiWnR1Bf7LFjOXAv2%2F7br39fVE8eKG0UboM3LV2RfGLkI2n5CD0fSGEJmTjKW1bIg4WYfFlA%2Bint3YkhfQZB8GUA89Gvg%2F605Inl8ACRcAdziq5tV39UNlDFyFj0LN8VpI6XgxNeXf3giWrFyDavUWJZl6QgP89GQF3Wac54sYaydDrzE2h0qg0DgEyZ3%2F96Z9rtB%2F5N1P1gliOZZIGIfFEe1JEUXu74BpKi33iAH%2BJIiQ44phGg9g%2F9FJAcZXh2ZFnEgVpKMQXHimqjTGv85UQTEQWrbxNmdgfNmciGPIWEd9BQ5qYtTDd9BEI%2FpGHxKK6XeYKhbyTu2LMiYw4p2bwgY6pgGo57QENqdww%2F4P21lW39vsM3nyjV85CypKO1hc5wJpfuQZqqF2IJqmdUo5ghqhnaXyLRf3JY581ooydxtm8GFU9KXtKrAflSKMx4zGNSCcPZapy3lO9t63sWH4HC74twkg4a0ANCzTgZXRC4oGXMZdr3CtPZyl7YENvLz7OKbR5HohVClHItJPptRA95bwsnJMX064y8jrUNXuUnoB7N3hw5UvORw2&X-Amz-Signature=f0d533e73b45efd02484c2b81025fece86ee61b5f908a851f4dd80eab2d1cd07&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZNVFAG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvJA1KRwGSUR%2FYuz7uNw9MtGYV9SWXOS7Y%2FcW7vcZwJAiAGUtmDSnZxdUoOsiuSFdifAhZCeDPuJ4T3my2CdkenlSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSsjfTWGrC4BSQvX3KtwDg17SWOdlWVmXRzqvu53VZIp82iKs%2B9t%2BnJl%2FEaGAPW4AEkcs3vJW%2BtRAeaNELcCOO%2BWrK3Q29aTCtOtJIOMEdjP3q%2F5z0tWr4lBoJ1nZnTy1CMqUFUuqSIDcC7YGAJOIbvexE61m0WP%2BGvMeoyyR5tFvI%2BuINcaQz3faTQp%2FeMBIv6sf%2Ft6FVrmDY97z8eQYbkBbHs4jJhfzBVRpTIv7QYYaorqv2oY%2BVHsFJ8QMA5YPwLgy%2Fzj8iRwo0zuN9Aopql86S8A3u69sx2RYyuR%2BmscjJ5ojY7NoESntkvo5pBwiWnR1Bf7LFjOXAv2%2F7br39fVE8eKG0UboM3LV2RfGLkI2n5CD0fSGEJmTjKW1bIg4WYfFlA%2Bint3YkhfQZB8GUA89Gvg%2F605Inl8ACRcAdziq5tV39UNlDFyFj0LN8VpI6XgxNeXf3giWrFyDavUWJZl6QgP89GQF3Wac54sYaydDrzE2h0qg0DgEyZ3%2F96Z9rtB%2F5N1P1gliOZZIGIfFEe1JEUXu74BpKi33iAH%2BJIiQ44phGg9g%2F9FJAcZXh2ZFnEgVpKMQXHimqjTGv85UQTEQWrbxNmdgfNmciGPIWEd9BQ5qYtTDd9BEI%2FpGHxKK6XeYKhbyTu2LMiYw4p2bwgY6pgGo57QENqdww%2F4P21lW39vsM3nyjV85CypKO1hc5wJpfuQZqqF2IJqmdUo5ghqhnaXyLRf3JY581ooydxtm8GFU9KXtKrAflSKMx4zGNSCcPZapy3lO9t63sWH4HC74twkg4a0ANCzTgZXRC4oGXMZdr3CtPZyl7YENvLz7OKbR5HohVClHItJPptRA95bwsnJMX064y8jrUNXuUnoB7N3hw5UvORw2&X-Amz-Signature=42dec769da5fb280cff9f37d33f89723b778eac826f73f8a29c233f79106c049&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZNVFAG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvJA1KRwGSUR%2FYuz7uNw9MtGYV9SWXOS7Y%2FcW7vcZwJAiAGUtmDSnZxdUoOsiuSFdifAhZCeDPuJ4T3my2CdkenlSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSsjfTWGrC4BSQvX3KtwDg17SWOdlWVmXRzqvu53VZIp82iKs%2B9t%2BnJl%2FEaGAPW4AEkcs3vJW%2BtRAeaNELcCOO%2BWrK3Q29aTCtOtJIOMEdjP3q%2F5z0tWr4lBoJ1nZnTy1CMqUFUuqSIDcC7YGAJOIbvexE61m0WP%2BGvMeoyyR5tFvI%2BuINcaQz3faTQp%2FeMBIv6sf%2Ft6FVrmDY97z8eQYbkBbHs4jJhfzBVRpTIv7QYYaorqv2oY%2BVHsFJ8QMA5YPwLgy%2Fzj8iRwo0zuN9Aopql86S8A3u69sx2RYyuR%2BmscjJ5ojY7NoESntkvo5pBwiWnR1Bf7LFjOXAv2%2F7br39fVE8eKG0UboM3LV2RfGLkI2n5CD0fSGEJmTjKW1bIg4WYfFlA%2Bint3YkhfQZB8GUA89Gvg%2F605Inl8ACRcAdziq5tV39UNlDFyFj0LN8VpI6XgxNeXf3giWrFyDavUWJZl6QgP89GQF3Wac54sYaydDrzE2h0qg0DgEyZ3%2F96Z9rtB%2F5N1P1gliOZZIGIfFEe1JEUXu74BpKi33iAH%2BJIiQ44phGg9g%2F9FJAcZXh2ZFnEgVpKMQXHimqjTGv85UQTEQWrbxNmdgfNmciGPIWEd9BQ5qYtTDd9BEI%2FpGHxKK6XeYKhbyTu2LMiYw4p2bwgY6pgGo57QENqdww%2F4P21lW39vsM3nyjV85CypKO1hc5wJpfuQZqqF2IJqmdUo5ghqhnaXyLRf3JY581ooydxtm8GFU9KXtKrAflSKMx4zGNSCcPZapy3lO9t63sWH4HC74twkg4a0ANCzTgZXRC4oGXMZdr3CtPZyl7YENvLz7OKbR5HohVClHItJPptRA95bwsnJMX064y8jrUNXuUnoB7N3hw5UvORw2&X-Amz-Signature=98aee56e15c20b5beee3d8c094ca70951a256eccf835c3683bf7b2c6d1e0063f&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NZNVFAG%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T140921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDvJA1KRwGSUR%2FYuz7uNw9MtGYV9SWXOS7Y%2FcW7vcZwJAiAGUtmDSnZxdUoOsiuSFdifAhZCeDPuJ4T3my2CdkenlSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMSsjfTWGrC4BSQvX3KtwDg17SWOdlWVmXRzqvu53VZIp82iKs%2B9t%2BnJl%2FEaGAPW4AEkcs3vJW%2BtRAeaNELcCOO%2BWrK3Q29aTCtOtJIOMEdjP3q%2F5z0tWr4lBoJ1nZnTy1CMqUFUuqSIDcC7YGAJOIbvexE61m0WP%2BGvMeoyyR5tFvI%2BuINcaQz3faTQp%2FeMBIv6sf%2Ft6FVrmDY97z8eQYbkBbHs4jJhfzBVRpTIv7QYYaorqv2oY%2BVHsFJ8QMA5YPwLgy%2Fzj8iRwo0zuN9Aopql86S8A3u69sx2RYyuR%2BmscjJ5ojY7NoESntkvo5pBwiWnR1Bf7LFjOXAv2%2F7br39fVE8eKG0UboM3LV2RfGLkI2n5CD0fSGEJmTjKW1bIg4WYfFlA%2Bint3YkhfQZB8GUA89Gvg%2F605Inl8ACRcAdziq5tV39UNlDFyFj0LN8VpI6XgxNeXf3giWrFyDavUWJZl6QgP89GQF3Wac54sYaydDrzE2h0qg0DgEyZ3%2F96Z9rtB%2F5N1P1gliOZZIGIfFEe1JEUXu74BpKi33iAH%2BJIiQ44phGg9g%2F9FJAcZXh2ZFnEgVpKMQXHimqjTGv85UQTEQWrbxNmdgfNmciGPIWEd9BQ5qYtTDd9BEI%2FpGHxKK6XeYKhbyTu2LMiYw4p2bwgY6pgGo57QENqdww%2F4P21lW39vsM3nyjV85CypKO1hc5wJpfuQZqqF2IJqmdUo5ghqhnaXyLRf3JY581ooydxtm8GFU9KXtKrAflSKMx4zGNSCcPZapy3lO9t63sWH4HC74twkg4a0ANCzTgZXRC4oGXMZdr3CtPZyl7YENvLz7OKbR5HohVClHItJPptRA95bwsnJMX064y8jrUNXuUnoB7N3hw5UvORw2&X-Amz-Signature=c0ee53aad8b7660f6f9078be3b681e7bacb5dc3144d44145935027f8c933f676&X-Amz-SignedHeaders=host&x-id=GetObject)
