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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7PMXHD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGRLxvO8%2BO3Dt8SAFWk5l3bDJigZX5wuw%2FZ5VY27B5G%2FAiAI7KzfmB8u9DE%2FlaLdBunh99h8hnJE%2Boh8mn%2FXaQFhOCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYVMwE%2BMzCgD8HccKtwDUCeKgVclkT40RoMIMhSFxDBvutkgk4g0UHml7pLuoA05wP18NBgG7eyeyPfNp6UVbiL7kyqBakVrxSVOA37Shhm0qF4wIp%2FzjxAd7yMwQnRUCxwIX4hpWXuPtQRLRqWQ4liIQ4VOCe7K5tOMMFxpLvcssj0urb9jH6KRb64GqqKYd3GuY2QjM3KSLknuEhgTZVNW5pnfrF3lzm7x0%2Fh7RzDOObmTk%2B5BYPh1%2BFPiNw4v%2Fe2RxtzS7fZT9c1C%2ByDGONSG9Zny0X9RnEv20K%2Fc7P6EbaF8%2F4%2BJNnsPP5xV2oUJ19H3ziYT%2FEJD5VtAtlhKorFfWBH8nekaYr9JHUyV0hzThEeDKhy2w6enwhKOoScXsCEmVmUab5Ip7EVIjn%2B2vaKkMRIQEw3WsEKd193hMHT3fxne1RWm4rex1PKxvwMC0GmGjo2God5m%2By23UNihphkNPpLL8L%2BG%2FKsC16m2tQs0uJ3uJ0frEAAV3ErGj2dOtLsiH5N5dIwQwv5Jo2%2BI2%2FZU%2BISWC4sGwejV8DHk8ppDbu09YNJBAO7CCaKsQqq%2BBRC%2FmTjDTJstt7uSBD8uO38f7etnUbPqERRFqIKQiD%2BBw4wj6DC1aoUfppUb955wfEJvE1leJIn1N5ww27fnvwY6pgEMhv43%2FnXDoUKypDQPs909d93L4Ruf2dMazgSKbLwa2iMKJI7hnJbA4sRSpDzqYyZLVJoqY7%2BfBU030fkWe2hriyt5joIR5qP7IHfyfOyXBeuK%2B4JK0E7MG6bX9%2FK19b5bsDtgrX5p5GHxadegrZuUkZgd6s7q94LD8NzRyw0Fi4kZjeW%2BMwOqQMdcBgj0bH8Ii70%2B1AZm3cx65H5RLHtSsW%2B4S3zU&X-Amz-Signature=8b109b799a538353c1f9108e95a7f8aa3473f2669b401f67f5d5c4e3a0f5863b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7PMXHD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGRLxvO8%2BO3Dt8SAFWk5l3bDJigZX5wuw%2FZ5VY27B5G%2FAiAI7KzfmB8u9DE%2FlaLdBunh99h8hnJE%2Boh8mn%2FXaQFhOCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYVMwE%2BMzCgD8HccKtwDUCeKgVclkT40RoMIMhSFxDBvutkgk4g0UHml7pLuoA05wP18NBgG7eyeyPfNp6UVbiL7kyqBakVrxSVOA37Shhm0qF4wIp%2FzjxAd7yMwQnRUCxwIX4hpWXuPtQRLRqWQ4liIQ4VOCe7K5tOMMFxpLvcssj0urb9jH6KRb64GqqKYd3GuY2QjM3KSLknuEhgTZVNW5pnfrF3lzm7x0%2Fh7RzDOObmTk%2B5BYPh1%2BFPiNw4v%2Fe2RxtzS7fZT9c1C%2ByDGONSG9Zny0X9RnEv20K%2Fc7P6EbaF8%2F4%2BJNnsPP5xV2oUJ19H3ziYT%2FEJD5VtAtlhKorFfWBH8nekaYr9JHUyV0hzThEeDKhy2w6enwhKOoScXsCEmVmUab5Ip7EVIjn%2B2vaKkMRIQEw3WsEKd193hMHT3fxne1RWm4rex1PKxvwMC0GmGjo2God5m%2By23UNihphkNPpLL8L%2BG%2FKsC16m2tQs0uJ3uJ0frEAAV3ErGj2dOtLsiH5N5dIwQwv5Jo2%2BI2%2FZU%2BISWC4sGwejV8DHk8ppDbu09YNJBAO7CCaKsQqq%2BBRC%2FmTjDTJstt7uSBD8uO38f7etnUbPqERRFqIKQiD%2BBw4wj6DC1aoUfppUb955wfEJvE1leJIn1N5ww27fnvwY6pgEMhv43%2FnXDoUKypDQPs909d93L4Ruf2dMazgSKbLwa2iMKJI7hnJbA4sRSpDzqYyZLVJoqY7%2BfBU030fkWe2hriyt5joIR5qP7IHfyfOyXBeuK%2B4JK0E7MG6bX9%2FK19b5bsDtgrX5p5GHxadegrZuUkZgd6s7q94LD8NzRyw0Fi4kZjeW%2BMwOqQMdcBgj0bH8Ii70%2B1AZm3cx65H5RLHtSsW%2B4S3zU&X-Amz-Signature=81d4a8a2e0a9f4b6f43cc57f9f319078b4057678fff639374cf1dde7ac3cfad0&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7PMXHD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGRLxvO8%2BO3Dt8SAFWk5l3bDJigZX5wuw%2FZ5VY27B5G%2FAiAI7KzfmB8u9DE%2FlaLdBunh99h8hnJE%2Boh8mn%2FXaQFhOCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYVMwE%2BMzCgD8HccKtwDUCeKgVclkT40RoMIMhSFxDBvutkgk4g0UHml7pLuoA05wP18NBgG7eyeyPfNp6UVbiL7kyqBakVrxSVOA37Shhm0qF4wIp%2FzjxAd7yMwQnRUCxwIX4hpWXuPtQRLRqWQ4liIQ4VOCe7K5tOMMFxpLvcssj0urb9jH6KRb64GqqKYd3GuY2QjM3KSLknuEhgTZVNW5pnfrF3lzm7x0%2Fh7RzDOObmTk%2B5BYPh1%2BFPiNw4v%2Fe2RxtzS7fZT9c1C%2ByDGONSG9Zny0X9RnEv20K%2Fc7P6EbaF8%2F4%2BJNnsPP5xV2oUJ19H3ziYT%2FEJD5VtAtlhKorFfWBH8nekaYr9JHUyV0hzThEeDKhy2w6enwhKOoScXsCEmVmUab5Ip7EVIjn%2B2vaKkMRIQEw3WsEKd193hMHT3fxne1RWm4rex1PKxvwMC0GmGjo2God5m%2By23UNihphkNPpLL8L%2BG%2FKsC16m2tQs0uJ3uJ0frEAAV3ErGj2dOtLsiH5N5dIwQwv5Jo2%2BI2%2FZU%2BISWC4sGwejV8DHk8ppDbu09YNJBAO7CCaKsQqq%2BBRC%2FmTjDTJstt7uSBD8uO38f7etnUbPqERRFqIKQiD%2BBw4wj6DC1aoUfppUb955wfEJvE1leJIn1N5ww27fnvwY6pgEMhv43%2FnXDoUKypDQPs909d93L4Ruf2dMazgSKbLwa2iMKJI7hnJbA4sRSpDzqYyZLVJoqY7%2BfBU030fkWe2hriyt5joIR5qP7IHfyfOyXBeuK%2B4JK0E7MG6bX9%2FK19b5bsDtgrX5p5GHxadegrZuUkZgd6s7q94LD8NzRyw0Fi4kZjeW%2BMwOqQMdcBgj0bH8Ii70%2B1AZm3cx65H5RLHtSsW%2B4S3zU&X-Amz-Signature=b00f347dc06d5aac432a4c39dec92634689b93a70fd78c141ffab251a5bada40&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7PMXHD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGRLxvO8%2BO3Dt8SAFWk5l3bDJigZX5wuw%2FZ5VY27B5G%2FAiAI7KzfmB8u9DE%2FlaLdBunh99h8hnJE%2Boh8mn%2FXaQFhOCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYVMwE%2BMzCgD8HccKtwDUCeKgVclkT40RoMIMhSFxDBvutkgk4g0UHml7pLuoA05wP18NBgG7eyeyPfNp6UVbiL7kyqBakVrxSVOA37Shhm0qF4wIp%2FzjxAd7yMwQnRUCxwIX4hpWXuPtQRLRqWQ4liIQ4VOCe7K5tOMMFxpLvcssj0urb9jH6KRb64GqqKYd3GuY2QjM3KSLknuEhgTZVNW5pnfrF3lzm7x0%2Fh7RzDOObmTk%2B5BYPh1%2BFPiNw4v%2Fe2RxtzS7fZT9c1C%2ByDGONSG9Zny0X9RnEv20K%2Fc7P6EbaF8%2F4%2BJNnsPP5xV2oUJ19H3ziYT%2FEJD5VtAtlhKorFfWBH8nekaYr9JHUyV0hzThEeDKhy2w6enwhKOoScXsCEmVmUab5Ip7EVIjn%2B2vaKkMRIQEw3WsEKd193hMHT3fxne1RWm4rex1PKxvwMC0GmGjo2God5m%2By23UNihphkNPpLL8L%2BG%2FKsC16m2tQs0uJ3uJ0frEAAV3ErGj2dOtLsiH5N5dIwQwv5Jo2%2BI2%2FZU%2BISWC4sGwejV8DHk8ppDbu09YNJBAO7CCaKsQqq%2BBRC%2FmTjDTJstt7uSBD8uO38f7etnUbPqERRFqIKQiD%2BBw4wj6DC1aoUfppUb955wfEJvE1leJIn1N5ww27fnvwY6pgEMhv43%2FnXDoUKypDQPs909d93L4Ruf2dMazgSKbLwa2iMKJI7hnJbA4sRSpDzqYyZLVJoqY7%2BfBU030fkWe2hriyt5joIR5qP7IHfyfOyXBeuK%2B4JK0E7MG6bX9%2FK19b5bsDtgrX5p5GHxadegrZuUkZgd6s7q94LD8NzRyw0Fi4kZjeW%2BMwOqQMdcBgj0bH8Ii70%2B1AZm3cx65H5RLHtSsW%2B4S3zU&X-Amz-Signature=842e38c81903528b0067f06141dac4315c4387049480f9a957fefc705470d3f0&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7PMXHD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGRLxvO8%2BO3Dt8SAFWk5l3bDJigZX5wuw%2FZ5VY27B5G%2FAiAI7KzfmB8u9DE%2FlaLdBunh99h8hnJE%2Boh8mn%2FXaQFhOCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYVMwE%2BMzCgD8HccKtwDUCeKgVclkT40RoMIMhSFxDBvutkgk4g0UHml7pLuoA05wP18NBgG7eyeyPfNp6UVbiL7kyqBakVrxSVOA37Shhm0qF4wIp%2FzjxAd7yMwQnRUCxwIX4hpWXuPtQRLRqWQ4liIQ4VOCe7K5tOMMFxpLvcssj0urb9jH6KRb64GqqKYd3GuY2QjM3KSLknuEhgTZVNW5pnfrF3lzm7x0%2Fh7RzDOObmTk%2B5BYPh1%2BFPiNw4v%2Fe2RxtzS7fZT9c1C%2ByDGONSG9Zny0X9RnEv20K%2Fc7P6EbaF8%2F4%2BJNnsPP5xV2oUJ19H3ziYT%2FEJD5VtAtlhKorFfWBH8nekaYr9JHUyV0hzThEeDKhy2w6enwhKOoScXsCEmVmUab5Ip7EVIjn%2B2vaKkMRIQEw3WsEKd193hMHT3fxne1RWm4rex1PKxvwMC0GmGjo2God5m%2By23UNihphkNPpLL8L%2BG%2FKsC16m2tQs0uJ3uJ0frEAAV3ErGj2dOtLsiH5N5dIwQwv5Jo2%2BI2%2FZU%2BISWC4sGwejV8DHk8ppDbu09YNJBAO7CCaKsQqq%2BBRC%2FmTjDTJstt7uSBD8uO38f7etnUbPqERRFqIKQiD%2BBw4wj6DC1aoUfppUb955wfEJvE1leJIn1N5ww27fnvwY6pgEMhv43%2FnXDoUKypDQPs909d93L4Ruf2dMazgSKbLwa2iMKJI7hnJbA4sRSpDzqYyZLVJoqY7%2BfBU030fkWe2hriyt5joIR5qP7IHfyfOyXBeuK%2B4JK0E7MG6bX9%2FK19b5bsDtgrX5p5GHxadegrZuUkZgd6s7q94LD8NzRyw0Fi4kZjeW%2BMwOqQMdcBgj0bH8Ii70%2B1AZm3cx65H5RLHtSsW%2B4S3zU&X-Amz-Signature=259af1cd47090a590dda779bb421383e35662feddaf851854c6371c3dca16b45&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QR7PMXHD%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T041009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIGRLxvO8%2BO3Dt8SAFWk5l3bDJigZX5wuw%2FZ5VY27B5G%2FAiAI7KzfmB8u9DE%2FlaLdBunh99h8hnJE%2Boh8mn%2FXaQFhOCqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcYVMwE%2BMzCgD8HccKtwDUCeKgVclkT40RoMIMhSFxDBvutkgk4g0UHml7pLuoA05wP18NBgG7eyeyPfNp6UVbiL7kyqBakVrxSVOA37Shhm0qF4wIp%2FzjxAd7yMwQnRUCxwIX4hpWXuPtQRLRqWQ4liIQ4VOCe7K5tOMMFxpLvcssj0urb9jH6KRb64GqqKYd3GuY2QjM3KSLknuEhgTZVNW5pnfrF3lzm7x0%2Fh7RzDOObmTk%2B5BYPh1%2BFPiNw4v%2Fe2RxtzS7fZT9c1C%2ByDGONSG9Zny0X9RnEv20K%2Fc7P6EbaF8%2F4%2BJNnsPP5xV2oUJ19H3ziYT%2FEJD5VtAtlhKorFfWBH8nekaYr9JHUyV0hzThEeDKhy2w6enwhKOoScXsCEmVmUab5Ip7EVIjn%2B2vaKkMRIQEw3WsEKd193hMHT3fxne1RWm4rex1PKxvwMC0GmGjo2God5m%2By23UNihphkNPpLL8L%2BG%2FKsC16m2tQs0uJ3uJ0frEAAV3ErGj2dOtLsiH5N5dIwQwv5Jo2%2BI2%2FZU%2BISWC4sGwejV8DHk8ppDbu09YNJBAO7CCaKsQqq%2BBRC%2FmTjDTJstt7uSBD8uO38f7etnUbPqERRFqIKQiD%2BBw4wj6DC1aoUfppUb955wfEJvE1leJIn1N5ww27fnvwY6pgEMhv43%2FnXDoUKypDQPs909d93L4Ruf2dMazgSKbLwa2iMKJI7hnJbA4sRSpDzqYyZLVJoqY7%2BfBU030fkWe2hriyt5joIR5qP7IHfyfOyXBeuK%2B4JK0E7MG6bX9%2FK19b5bsDtgrX5p5GHxadegrZuUkZgd6s7q94LD8NzRyw0Fi4kZjeW%2BMwOqQMdcBgj0bH8Ii70%2B1AZm3cx65H5RLHtSsW%2B4S3zU&X-Amz-Signature=0ffd958f0079aea4b26d5ebea2e7f49e8ebbaab8cb5e3cce0ada8992c0e3c08f&X-Amz-SignedHeaders=host&x-id=GetObject)
