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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G5OXJU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ZHp7sE0KMXx8C2XWK128Orxy3Zy%2BN4u62fZB0H2cKgIhAI43OdqiCLiErNFFTYaThNI60UnPxH5lBMYLTu0lyZ0hKv8DCF4QABoMNjM3NDIzMTgzODA1IgzO2hixWIw7wsmw04Iq3AOKAszrXwDCqikyLLmmzNfkDJD%2B%2Bk1E9ejZECUPsoC4CX6U9rgPj3cl1n%2B1bDjPPBLTOQutlwIy5JEpS1Tg2RfP8sT%2FgYs1YTYJ2zbLrfKXrgxOCcmphaY2qraucycDS%2FeYJm4qSF7rqsE%2BeEnsKpwYL0N8sObyyTmJPis%2FUqld9zL%2B2JXVLxyR3ztWcM0YWVuT%2BgrhiaBNlXDWgMGuRAzbA3ifez3XGbms8cgFZ5wrwW2ReGP1gGmFBzNV9SMWvRz9H8Z8ZS0aXH9jWmJJwC9XY5GQB9UGRnVUXAqPKfjTfefVmh05rKI9rFv4cQIytg0UbDktQH%2F1ZtMGsQI9Q%2BtbX6ASgnL6%2FE9b1nPCgU%2Fei%2F5M00VfvQXsnv339igerWoQf4AND7vmVoDoiVZ8EEtULTRiGQwY%2BwHC%2F%2BQ%2BLVQIW2s0tz0dx09gE1%2FD3LJZyXf8UgDf3CCeDGDADYrVpLlUWOBuvz4loaseiGvd3gJ5bp8%2Fml6Ko79tAgAGfVdl8hjl70VSlPmS0GpAXLkKMfKJMZXZj%2Bcb9QiuC%2FSUfHl3P%2BhpyIPl3iHAA%2BI1AYfwus0YlfFMcAgJt9ZA7dSOpvkkOrJDFNxCe%2BbzcsCMmvlpeKZdXx6Fh5EdMd5%2B6jCjgaLBBjqkAVc6qU5wRWednaGMDWi6EeRgP604rumXPvfrrah2m7k143xMkQRZKO3itqKBiWmgX%2BLmA%2FggXh1QGetn722SwfpWCoEmLrcKx58Ni%2F5DICGxDhbe192ezrM3vYzxgY3Ir%2FBMuciK2wY%2F4FFfvXAmFJ1g4B3aiRPYCjjZ%2Bc7sBTXW88SvqRSQLmU%2FUe4WuBEKzhM5k0aFJitVZYpxUcm45IcAAOHN&X-Amz-Signature=c8ae249c40c88a024776e3c5b4ddda29c07a30e25992e06b40b7d1e583f4751f&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G5OXJU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ZHp7sE0KMXx8C2XWK128Orxy3Zy%2BN4u62fZB0H2cKgIhAI43OdqiCLiErNFFTYaThNI60UnPxH5lBMYLTu0lyZ0hKv8DCF4QABoMNjM3NDIzMTgzODA1IgzO2hixWIw7wsmw04Iq3AOKAszrXwDCqikyLLmmzNfkDJD%2B%2Bk1E9ejZECUPsoC4CX6U9rgPj3cl1n%2B1bDjPPBLTOQutlwIy5JEpS1Tg2RfP8sT%2FgYs1YTYJ2zbLrfKXrgxOCcmphaY2qraucycDS%2FeYJm4qSF7rqsE%2BeEnsKpwYL0N8sObyyTmJPis%2FUqld9zL%2B2JXVLxyR3ztWcM0YWVuT%2BgrhiaBNlXDWgMGuRAzbA3ifez3XGbms8cgFZ5wrwW2ReGP1gGmFBzNV9SMWvRz9H8Z8ZS0aXH9jWmJJwC9XY5GQB9UGRnVUXAqPKfjTfefVmh05rKI9rFv4cQIytg0UbDktQH%2F1ZtMGsQI9Q%2BtbX6ASgnL6%2FE9b1nPCgU%2Fei%2F5M00VfvQXsnv339igerWoQf4AND7vmVoDoiVZ8EEtULTRiGQwY%2BwHC%2F%2BQ%2BLVQIW2s0tz0dx09gE1%2FD3LJZyXf8UgDf3CCeDGDADYrVpLlUWOBuvz4loaseiGvd3gJ5bp8%2Fml6Ko79tAgAGfVdl8hjl70VSlPmS0GpAXLkKMfKJMZXZj%2Bcb9QiuC%2FSUfHl3P%2BhpyIPl3iHAA%2BI1AYfwus0YlfFMcAgJt9ZA7dSOpvkkOrJDFNxCe%2BbzcsCMmvlpeKZdXx6Fh5EdMd5%2B6jCjgaLBBjqkAVc6qU5wRWednaGMDWi6EeRgP604rumXPvfrrah2m7k143xMkQRZKO3itqKBiWmgX%2BLmA%2FggXh1QGetn722SwfpWCoEmLrcKx58Ni%2F5DICGxDhbe192ezrM3vYzxgY3Ir%2FBMuciK2wY%2F4FFfvXAmFJ1g4B3aiRPYCjjZ%2Bc7sBTXW88SvqRSQLmU%2FUe4WuBEKzhM5k0aFJitVZYpxUcm45IcAAOHN&X-Amz-Signature=85e8d8e3230f9c273dda6bb8f38d63229c5ad20aac65dad943c92aa249dab9ed&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G5OXJU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ZHp7sE0KMXx8C2XWK128Orxy3Zy%2BN4u62fZB0H2cKgIhAI43OdqiCLiErNFFTYaThNI60UnPxH5lBMYLTu0lyZ0hKv8DCF4QABoMNjM3NDIzMTgzODA1IgzO2hixWIw7wsmw04Iq3AOKAszrXwDCqikyLLmmzNfkDJD%2B%2Bk1E9ejZECUPsoC4CX6U9rgPj3cl1n%2B1bDjPPBLTOQutlwIy5JEpS1Tg2RfP8sT%2FgYs1YTYJ2zbLrfKXrgxOCcmphaY2qraucycDS%2FeYJm4qSF7rqsE%2BeEnsKpwYL0N8sObyyTmJPis%2FUqld9zL%2B2JXVLxyR3ztWcM0YWVuT%2BgrhiaBNlXDWgMGuRAzbA3ifez3XGbms8cgFZ5wrwW2ReGP1gGmFBzNV9SMWvRz9H8Z8ZS0aXH9jWmJJwC9XY5GQB9UGRnVUXAqPKfjTfefVmh05rKI9rFv4cQIytg0UbDktQH%2F1ZtMGsQI9Q%2BtbX6ASgnL6%2FE9b1nPCgU%2Fei%2F5M00VfvQXsnv339igerWoQf4AND7vmVoDoiVZ8EEtULTRiGQwY%2BwHC%2F%2BQ%2BLVQIW2s0tz0dx09gE1%2FD3LJZyXf8UgDf3CCeDGDADYrVpLlUWOBuvz4loaseiGvd3gJ5bp8%2Fml6Ko79tAgAGfVdl8hjl70VSlPmS0GpAXLkKMfKJMZXZj%2Bcb9QiuC%2FSUfHl3P%2BhpyIPl3iHAA%2BI1AYfwus0YlfFMcAgJt9ZA7dSOpvkkOrJDFNxCe%2BbzcsCMmvlpeKZdXx6Fh5EdMd5%2B6jCjgaLBBjqkAVc6qU5wRWednaGMDWi6EeRgP604rumXPvfrrah2m7k143xMkQRZKO3itqKBiWmgX%2BLmA%2FggXh1QGetn722SwfpWCoEmLrcKx58Ni%2F5DICGxDhbe192ezrM3vYzxgY3Ir%2FBMuciK2wY%2F4FFfvXAmFJ1g4B3aiRPYCjjZ%2Bc7sBTXW88SvqRSQLmU%2FUe4WuBEKzhM5k0aFJitVZYpxUcm45IcAAOHN&X-Amz-Signature=1d1a3199057f51abd4f7fcbceeff2ae6be341cccf63ed7273e5fa479a1eb6b7f&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G5OXJU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ZHp7sE0KMXx8C2XWK128Orxy3Zy%2BN4u62fZB0H2cKgIhAI43OdqiCLiErNFFTYaThNI60UnPxH5lBMYLTu0lyZ0hKv8DCF4QABoMNjM3NDIzMTgzODA1IgzO2hixWIw7wsmw04Iq3AOKAszrXwDCqikyLLmmzNfkDJD%2B%2Bk1E9ejZECUPsoC4CX6U9rgPj3cl1n%2B1bDjPPBLTOQutlwIy5JEpS1Tg2RfP8sT%2FgYs1YTYJ2zbLrfKXrgxOCcmphaY2qraucycDS%2FeYJm4qSF7rqsE%2BeEnsKpwYL0N8sObyyTmJPis%2FUqld9zL%2B2JXVLxyR3ztWcM0YWVuT%2BgrhiaBNlXDWgMGuRAzbA3ifez3XGbms8cgFZ5wrwW2ReGP1gGmFBzNV9SMWvRz9H8Z8ZS0aXH9jWmJJwC9XY5GQB9UGRnVUXAqPKfjTfefVmh05rKI9rFv4cQIytg0UbDktQH%2F1ZtMGsQI9Q%2BtbX6ASgnL6%2FE9b1nPCgU%2Fei%2F5M00VfvQXsnv339igerWoQf4AND7vmVoDoiVZ8EEtULTRiGQwY%2BwHC%2F%2BQ%2BLVQIW2s0tz0dx09gE1%2FD3LJZyXf8UgDf3CCeDGDADYrVpLlUWOBuvz4loaseiGvd3gJ5bp8%2Fml6Ko79tAgAGfVdl8hjl70VSlPmS0GpAXLkKMfKJMZXZj%2Bcb9QiuC%2FSUfHl3P%2BhpyIPl3iHAA%2BI1AYfwus0YlfFMcAgJt9ZA7dSOpvkkOrJDFNxCe%2BbzcsCMmvlpeKZdXx6Fh5EdMd5%2B6jCjgaLBBjqkAVc6qU5wRWednaGMDWi6EeRgP604rumXPvfrrah2m7k143xMkQRZKO3itqKBiWmgX%2BLmA%2FggXh1QGetn722SwfpWCoEmLrcKx58Ni%2F5DICGxDhbe192ezrM3vYzxgY3Ir%2FBMuciK2wY%2F4FFfvXAmFJ1g4B3aiRPYCjjZ%2Bc7sBTXW88SvqRSQLmU%2FUe4WuBEKzhM5k0aFJitVZYpxUcm45IcAAOHN&X-Amz-Signature=14b2dbce2326201164af8571601cb5d41afda100d109817dca2c77c0add96317&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G5OXJU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ZHp7sE0KMXx8C2XWK128Orxy3Zy%2BN4u62fZB0H2cKgIhAI43OdqiCLiErNFFTYaThNI60UnPxH5lBMYLTu0lyZ0hKv8DCF4QABoMNjM3NDIzMTgzODA1IgzO2hixWIw7wsmw04Iq3AOKAszrXwDCqikyLLmmzNfkDJD%2B%2Bk1E9ejZECUPsoC4CX6U9rgPj3cl1n%2B1bDjPPBLTOQutlwIy5JEpS1Tg2RfP8sT%2FgYs1YTYJ2zbLrfKXrgxOCcmphaY2qraucycDS%2FeYJm4qSF7rqsE%2BeEnsKpwYL0N8sObyyTmJPis%2FUqld9zL%2B2JXVLxyR3ztWcM0YWVuT%2BgrhiaBNlXDWgMGuRAzbA3ifez3XGbms8cgFZ5wrwW2ReGP1gGmFBzNV9SMWvRz9H8Z8ZS0aXH9jWmJJwC9XY5GQB9UGRnVUXAqPKfjTfefVmh05rKI9rFv4cQIytg0UbDktQH%2F1ZtMGsQI9Q%2BtbX6ASgnL6%2FE9b1nPCgU%2Fei%2F5M00VfvQXsnv339igerWoQf4AND7vmVoDoiVZ8EEtULTRiGQwY%2BwHC%2F%2BQ%2BLVQIW2s0tz0dx09gE1%2FD3LJZyXf8UgDf3CCeDGDADYrVpLlUWOBuvz4loaseiGvd3gJ5bp8%2Fml6Ko79tAgAGfVdl8hjl70VSlPmS0GpAXLkKMfKJMZXZj%2Bcb9QiuC%2FSUfHl3P%2BhpyIPl3iHAA%2BI1AYfwus0YlfFMcAgJt9ZA7dSOpvkkOrJDFNxCe%2BbzcsCMmvlpeKZdXx6Fh5EdMd5%2B6jCjgaLBBjqkAVc6qU5wRWednaGMDWi6EeRgP604rumXPvfrrah2m7k143xMkQRZKO3itqKBiWmgX%2BLmA%2FggXh1QGetn722SwfpWCoEmLrcKx58Ni%2F5DICGxDhbe192ezrM3vYzxgY3Ir%2FBMuciK2wY%2F4FFfvXAmFJ1g4B3aiRPYCjjZ%2Bc7sBTXW88SvqRSQLmU%2FUe4WuBEKzhM5k0aFJitVZYpxUcm45IcAAOHN&X-Amz-Signature=0fb3a72476bb2bff47ac5318ad894e698a1f4ad2cbb3b6a503322580b1bc8200&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V4G5OXJU%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T131704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2ZHp7sE0KMXx8C2XWK128Orxy3Zy%2BN4u62fZB0H2cKgIhAI43OdqiCLiErNFFTYaThNI60UnPxH5lBMYLTu0lyZ0hKv8DCF4QABoMNjM3NDIzMTgzODA1IgzO2hixWIw7wsmw04Iq3AOKAszrXwDCqikyLLmmzNfkDJD%2B%2Bk1E9ejZECUPsoC4CX6U9rgPj3cl1n%2B1bDjPPBLTOQutlwIy5JEpS1Tg2RfP8sT%2FgYs1YTYJ2zbLrfKXrgxOCcmphaY2qraucycDS%2FeYJm4qSF7rqsE%2BeEnsKpwYL0N8sObyyTmJPis%2FUqld9zL%2B2JXVLxyR3ztWcM0YWVuT%2BgrhiaBNlXDWgMGuRAzbA3ifez3XGbms8cgFZ5wrwW2ReGP1gGmFBzNV9SMWvRz9H8Z8ZS0aXH9jWmJJwC9XY5GQB9UGRnVUXAqPKfjTfefVmh05rKI9rFv4cQIytg0UbDktQH%2F1ZtMGsQI9Q%2BtbX6ASgnL6%2FE9b1nPCgU%2Fei%2F5M00VfvQXsnv339igerWoQf4AND7vmVoDoiVZ8EEtULTRiGQwY%2BwHC%2F%2BQ%2BLVQIW2s0tz0dx09gE1%2FD3LJZyXf8UgDf3CCeDGDADYrVpLlUWOBuvz4loaseiGvd3gJ5bp8%2Fml6Ko79tAgAGfVdl8hjl70VSlPmS0GpAXLkKMfKJMZXZj%2Bcb9QiuC%2FSUfHl3P%2BhpyIPl3iHAA%2BI1AYfwus0YlfFMcAgJt9ZA7dSOpvkkOrJDFNxCe%2BbzcsCMmvlpeKZdXx6Fh5EdMd5%2B6jCjgaLBBjqkAVc6qU5wRWednaGMDWi6EeRgP604rumXPvfrrah2m7k143xMkQRZKO3itqKBiWmgX%2BLmA%2FggXh1QGetn722SwfpWCoEmLrcKx58Ni%2F5DICGxDhbe192ezrM3vYzxgY3Ir%2FBMuciK2wY%2F4FFfvXAmFJ1g4B3aiRPYCjjZ%2Bc7sBTXW88SvqRSQLmU%2FUe4WuBEKzhM5k0aFJitVZYpxUcm45IcAAOHN&X-Amz-Signature=0c88be0728f577e2e205770b8696ca626af32ab55d983e0993048901950f6ab7&X-Amz-SignedHeaders=host&x-id=GetObject)
