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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VEZX5S%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpsMEXN0%2FRAVd0COv5AhMY16EbeUYTeMNm05EbaQf7wIhANGgfEu1hQrTWEGH8k4BBWldHjRPxeA6jejm1xG1TN1NKv8DCCEQABoMNjM3NDIzMTgzODA1IgxufZ7iWPHC%2FvfvIdQq3AOHNz%2BRRatg7Lk7hifNa7FPcb%2FAI8VGbBFlb1Gzhl4yU1yB0ALn534BUR3C%2F4OeCaAp85%2BnTpv2lmGjrwmeurSJgEPZAR%2B3nnacEgdTqdJIa9ax5%2BBBoG4W7GtDVfL3HHN7HNUzNji3qgs4YO%2BuewFrJu4MZPhCukTdytY6d3vAE%2FexsuBJkbg6KS4UEvYOSENkMPebqFgSgXkVxQVFOe1xXYp3Ru%2F5TT0RUjnbwU2HA2Z4VDD%2B6GCLLRDdqpJ5vAxBVqLKPDMhT5xXjfoNvZrg%2BeSODyoQLxXEC9wkitJZDYHMWLjoHhDkZIpePoxXKCXZeCAAuaopqLkPm8FBSK%2B9rjoybzqBAUhuKFcpG6aZYLF%2Fj2aKixkd0MJfXxHv%2FmUhhFxwfGxCsMLWNYQNfH4VCClDJFBN113kjO3ceqlmZCs9ckf5p6Ed%2Fzy4BBKlU32TjyJXJKS0nUR3TexPhyY1LoIdD5%2FPval1AUABl6fBsZtlhUSQzDWRRy%2FMfdV2rhVnIoDxfBlIkSSdnEhKorHW8eoVEhgQx9VL6PZvB%2F8d4rhCjwCCEOmugkSqPdD%2BbD9z9YDUXe5dxFS%2FgZqkWdCCNBiUP0CQUrmcDlQPlEIY5d5ROG5vE%2F%2Bi4BfTujC08O69BjqkAbCG5VH3S56%2BSjPMmSxap6s6u3mPrPWp%2BDdkYQ6FpeCvsG3DHDOQ%2BlTiMVQEh%2B8%2BhIBHui3xbTfvosSVbyxrc6mnlf4JnygUCUWJ1ltnAVJ8yHTIyhyttSLGQV2tnRzsWOeNTpVTfrTK%2FBZ%2B%2FYoMLek4QHV6nTRTHxWesoFwOsnl5FU1aYPY5Xe0JTwBEXkKo5%2FBgdphI%2BY84C%2BFz1Rdr6w66%2BEY&X-Amz-Signature=054a541f21845d1550ad86ab0563fc66fca09f827e0351c1e0cb621cd9adc86b&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VEZX5S%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpsMEXN0%2FRAVd0COv5AhMY16EbeUYTeMNm05EbaQf7wIhANGgfEu1hQrTWEGH8k4BBWldHjRPxeA6jejm1xG1TN1NKv8DCCEQABoMNjM3NDIzMTgzODA1IgxufZ7iWPHC%2FvfvIdQq3AOHNz%2BRRatg7Lk7hifNa7FPcb%2FAI8VGbBFlb1Gzhl4yU1yB0ALn534BUR3C%2F4OeCaAp85%2BnTpv2lmGjrwmeurSJgEPZAR%2B3nnacEgdTqdJIa9ax5%2BBBoG4W7GtDVfL3HHN7HNUzNji3qgs4YO%2BuewFrJu4MZPhCukTdytY6d3vAE%2FexsuBJkbg6KS4UEvYOSENkMPebqFgSgXkVxQVFOe1xXYp3Ru%2F5TT0RUjnbwU2HA2Z4VDD%2B6GCLLRDdqpJ5vAxBVqLKPDMhT5xXjfoNvZrg%2BeSODyoQLxXEC9wkitJZDYHMWLjoHhDkZIpePoxXKCXZeCAAuaopqLkPm8FBSK%2B9rjoybzqBAUhuKFcpG6aZYLF%2Fj2aKixkd0MJfXxHv%2FmUhhFxwfGxCsMLWNYQNfH4VCClDJFBN113kjO3ceqlmZCs9ckf5p6Ed%2Fzy4BBKlU32TjyJXJKS0nUR3TexPhyY1LoIdD5%2FPval1AUABl6fBsZtlhUSQzDWRRy%2FMfdV2rhVnIoDxfBlIkSSdnEhKorHW8eoVEhgQx9VL6PZvB%2F8d4rhCjwCCEOmugkSqPdD%2BbD9z9YDUXe5dxFS%2FgZqkWdCCNBiUP0CQUrmcDlQPlEIY5d5ROG5vE%2F%2Bi4BfTujC08O69BjqkAbCG5VH3S56%2BSjPMmSxap6s6u3mPrPWp%2BDdkYQ6FpeCvsG3DHDOQ%2BlTiMVQEh%2B8%2BhIBHui3xbTfvosSVbyxrc6mnlf4JnygUCUWJ1ltnAVJ8yHTIyhyttSLGQV2tnRzsWOeNTpVTfrTK%2FBZ%2B%2FYoMLek4QHV6nTRTHxWesoFwOsnl5FU1aYPY5Xe0JTwBEXkKo5%2FBgdphI%2BY84C%2BFz1Rdr6w66%2BEY&X-Amz-Signature=42a3a90a0fa26ac1afca1f0a99a7bde0ba420fd6aaeb74f19e154d31c0c6eacf&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VEZX5S%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpsMEXN0%2FRAVd0COv5AhMY16EbeUYTeMNm05EbaQf7wIhANGgfEu1hQrTWEGH8k4BBWldHjRPxeA6jejm1xG1TN1NKv8DCCEQABoMNjM3NDIzMTgzODA1IgxufZ7iWPHC%2FvfvIdQq3AOHNz%2BRRatg7Lk7hifNa7FPcb%2FAI8VGbBFlb1Gzhl4yU1yB0ALn534BUR3C%2F4OeCaAp85%2BnTpv2lmGjrwmeurSJgEPZAR%2B3nnacEgdTqdJIa9ax5%2BBBoG4W7GtDVfL3HHN7HNUzNji3qgs4YO%2BuewFrJu4MZPhCukTdytY6d3vAE%2FexsuBJkbg6KS4UEvYOSENkMPebqFgSgXkVxQVFOe1xXYp3Ru%2F5TT0RUjnbwU2HA2Z4VDD%2B6GCLLRDdqpJ5vAxBVqLKPDMhT5xXjfoNvZrg%2BeSODyoQLxXEC9wkitJZDYHMWLjoHhDkZIpePoxXKCXZeCAAuaopqLkPm8FBSK%2B9rjoybzqBAUhuKFcpG6aZYLF%2Fj2aKixkd0MJfXxHv%2FmUhhFxwfGxCsMLWNYQNfH4VCClDJFBN113kjO3ceqlmZCs9ckf5p6Ed%2Fzy4BBKlU32TjyJXJKS0nUR3TexPhyY1LoIdD5%2FPval1AUABl6fBsZtlhUSQzDWRRy%2FMfdV2rhVnIoDxfBlIkSSdnEhKorHW8eoVEhgQx9VL6PZvB%2F8d4rhCjwCCEOmugkSqPdD%2BbD9z9YDUXe5dxFS%2FgZqkWdCCNBiUP0CQUrmcDlQPlEIY5d5ROG5vE%2F%2Bi4BfTujC08O69BjqkAbCG5VH3S56%2BSjPMmSxap6s6u3mPrPWp%2BDdkYQ6FpeCvsG3DHDOQ%2BlTiMVQEh%2B8%2BhIBHui3xbTfvosSVbyxrc6mnlf4JnygUCUWJ1ltnAVJ8yHTIyhyttSLGQV2tnRzsWOeNTpVTfrTK%2FBZ%2B%2FYoMLek4QHV6nTRTHxWesoFwOsnl5FU1aYPY5Xe0JTwBEXkKo5%2FBgdphI%2BY84C%2BFz1Rdr6w66%2BEY&X-Amz-Signature=29d3efda95c36cb6b314ad41ef32b18f7421bc915cde634e2056920ca9935e93&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VEZX5S%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpsMEXN0%2FRAVd0COv5AhMY16EbeUYTeMNm05EbaQf7wIhANGgfEu1hQrTWEGH8k4BBWldHjRPxeA6jejm1xG1TN1NKv8DCCEQABoMNjM3NDIzMTgzODA1IgxufZ7iWPHC%2FvfvIdQq3AOHNz%2BRRatg7Lk7hifNa7FPcb%2FAI8VGbBFlb1Gzhl4yU1yB0ALn534BUR3C%2F4OeCaAp85%2BnTpv2lmGjrwmeurSJgEPZAR%2B3nnacEgdTqdJIa9ax5%2BBBoG4W7GtDVfL3HHN7HNUzNji3qgs4YO%2BuewFrJu4MZPhCukTdytY6d3vAE%2FexsuBJkbg6KS4UEvYOSENkMPebqFgSgXkVxQVFOe1xXYp3Ru%2F5TT0RUjnbwU2HA2Z4VDD%2B6GCLLRDdqpJ5vAxBVqLKPDMhT5xXjfoNvZrg%2BeSODyoQLxXEC9wkitJZDYHMWLjoHhDkZIpePoxXKCXZeCAAuaopqLkPm8FBSK%2B9rjoybzqBAUhuKFcpG6aZYLF%2Fj2aKixkd0MJfXxHv%2FmUhhFxwfGxCsMLWNYQNfH4VCClDJFBN113kjO3ceqlmZCs9ckf5p6Ed%2Fzy4BBKlU32TjyJXJKS0nUR3TexPhyY1LoIdD5%2FPval1AUABl6fBsZtlhUSQzDWRRy%2FMfdV2rhVnIoDxfBlIkSSdnEhKorHW8eoVEhgQx9VL6PZvB%2F8d4rhCjwCCEOmugkSqPdD%2BbD9z9YDUXe5dxFS%2FgZqkWdCCNBiUP0CQUrmcDlQPlEIY5d5ROG5vE%2F%2Bi4BfTujC08O69BjqkAbCG5VH3S56%2BSjPMmSxap6s6u3mPrPWp%2BDdkYQ6FpeCvsG3DHDOQ%2BlTiMVQEh%2B8%2BhIBHui3xbTfvosSVbyxrc6mnlf4JnygUCUWJ1ltnAVJ8yHTIyhyttSLGQV2tnRzsWOeNTpVTfrTK%2FBZ%2B%2FYoMLek4QHV6nTRTHxWesoFwOsnl5FU1aYPY5Xe0JTwBEXkKo5%2FBgdphI%2BY84C%2BFz1Rdr6w66%2BEY&X-Amz-Signature=f1711711747712dd1712032e03c6368fd3c9ea5fbc882f04da8ee73dc51293f9&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VEZX5S%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpsMEXN0%2FRAVd0COv5AhMY16EbeUYTeMNm05EbaQf7wIhANGgfEu1hQrTWEGH8k4BBWldHjRPxeA6jejm1xG1TN1NKv8DCCEQABoMNjM3NDIzMTgzODA1IgxufZ7iWPHC%2FvfvIdQq3AOHNz%2BRRatg7Lk7hifNa7FPcb%2FAI8VGbBFlb1Gzhl4yU1yB0ALn534BUR3C%2F4OeCaAp85%2BnTpv2lmGjrwmeurSJgEPZAR%2B3nnacEgdTqdJIa9ax5%2BBBoG4W7GtDVfL3HHN7HNUzNji3qgs4YO%2BuewFrJu4MZPhCukTdytY6d3vAE%2FexsuBJkbg6KS4UEvYOSENkMPebqFgSgXkVxQVFOe1xXYp3Ru%2F5TT0RUjnbwU2HA2Z4VDD%2B6GCLLRDdqpJ5vAxBVqLKPDMhT5xXjfoNvZrg%2BeSODyoQLxXEC9wkitJZDYHMWLjoHhDkZIpePoxXKCXZeCAAuaopqLkPm8FBSK%2B9rjoybzqBAUhuKFcpG6aZYLF%2Fj2aKixkd0MJfXxHv%2FmUhhFxwfGxCsMLWNYQNfH4VCClDJFBN113kjO3ceqlmZCs9ckf5p6Ed%2Fzy4BBKlU32TjyJXJKS0nUR3TexPhyY1LoIdD5%2FPval1AUABl6fBsZtlhUSQzDWRRy%2FMfdV2rhVnIoDxfBlIkSSdnEhKorHW8eoVEhgQx9VL6PZvB%2F8d4rhCjwCCEOmugkSqPdD%2BbD9z9YDUXe5dxFS%2FgZqkWdCCNBiUP0CQUrmcDlQPlEIY5d5ROG5vE%2F%2Bi4BfTujC08O69BjqkAbCG5VH3S56%2BSjPMmSxap6s6u3mPrPWp%2BDdkYQ6FpeCvsG3DHDOQ%2BlTiMVQEh%2B8%2BhIBHui3xbTfvosSVbyxrc6mnlf4JnygUCUWJ1ltnAVJ8yHTIyhyttSLGQV2tnRzsWOeNTpVTfrTK%2FBZ%2B%2FYoMLek4QHV6nTRTHxWesoFwOsnl5FU1aYPY5Xe0JTwBEXkKo5%2FBgdphI%2BY84C%2BFz1Rdr6w66%2BEY&X-Amz-Signature=5ff90913d538c574364f8b7ca0819237663b7333876df7fc3bc12dbb7456858b&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VEZX5S%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T021439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDOpsMEXN0%2FRAVd0COv5AhMY16EbeUYTeMNm05EbaQf7wIhANGgfEu1hQrTWEGH8k4BBWldHjRPxeA6jejm1xG1TN1NKv8DCCEQABoMNjM3NDIzMTgzODA1IgxufZ7iWPHC%2FvfvIdQq3AOHNz%2BRRatg7Lk7hifNa7FPcb%2FAI8VGbBFlb1Gzhl4yU1yB0ALn534BUR3C%2F4OeCaAp85%2BnTpv2lmGjrwmeurSJgEPZAR%2B3nnacEgdTqdJIa9ax5%2BBBoG4W7GtDVfL3HHN7HNUzNji3qgs4YO%2BuewFrJu4MZPhCukTdytY6d3vAE%2FexsuBJkbg6KS4UEvYOSENkMPebqFgSgXkVxQVFOe1xXYp3Ru%2F5TT0RUjnbwU2HA2Z4VDD%2B6GCLLRDdqpJ5vAxBVqLKPDMhT5xXjfoNvZrg%2BeSODyoQLxXEC9wkitJZDYHMWLjoHhDkZIpePoxXKCXZeCAAuaopqLkPm8FBSK%2B9rjoybzqBAUhuKFcpG6aZYLF%2Fj2aKixkd0MJfXxHv%2FmUhhFxwfGxCsMLWNYQNfH4VCClDJFBN113kjO3ceqlmZCs9ckf5p6Ed%2Fzy4BBKlU32TjyJXJKS0nUR3TexPhyY1LoIdD5%2FPval1AUABl6fBsZtlhUSQzDWRRy%2FMfdV2rhVnIoDxfBlIkSSdnEhKorHW8eoVEhgQx9VL6PZvB%2F8d4rhCjwCCEOmugkSqPdD%2BbD9z9YDUXe5dxFS%2FgZqkWdCCNBiUP0CQUrmcDlQPlEIY5d5ROG5vE%2F%2Bi4BfTujC08O69BjqkAbCG5VH3S56%2BSjPMmSxap6s6u3mPrPWp%2BDdkYQ6FpeCvsG3DHDOQ%2BlTiMVQEh%2B8%2BhIBHui3xbTfvosSVbyxrc6mnlf4JnygUCUWJ1ltnAVJ8yHTIyhyttSLGQV2tnRzsWOeNTpVTfrTK%2FBZ%2B%2FYoMLek4QHV6nTRTHxWesoFwOsnl5FU1aYPY5Xe0JTwBEXkKo5%2FBgdphI%2BY84C%2BFz1Rdr6w66%2BEY&X-Amz-Signature=9f9958c5dd22d4ea049565814286134a58dec7c7ecf6a630c565fd6a010a4802&X-Amz-SignedHeaders=host&x-id=GetObject)
