---
sys:
  pageId: "d930549a-75a1-4e91-a7ca-cbf679347105"
  createdTime: "2024-09-20T17:07:00.000Z"
  lastEditedTime: "2025-01-26T16:44:00.000Z"
  propFilepath: "docs/Guides/intro_to_ROS2/Nav2 Stack(urdf).md"
title: "Nav2 Stack(urdf)"
date: "2025-01-26T16:44:00.000Z"
description: ""
tags: []
author: "Overridden author"
draft: false
weight: 151
toc: false
icon: ""
---

Original guide for reference: [https://docs.visualnav2.org/cansetup_guides/urdf/setup_urdf.html](https://docs.nav2.org/setup_guides/urdf/setup_urdf.html)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXZRNBC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDHxaVzYn4prn2CK2PK49MTxM5TasYvw32IuBiYxT28YQIhAKGvp29j7neLB2TPgSFVogT3NktNmMLrRvkgxS0ugqPKKv8DCGkQABoMNjM3NDIzMTgzODA1IgwwGDaR%2FIMZyaFEmE4q3APs6R%2Fa%2F23crKF7va48cjPHMwwcEUNseBJfvqLoJe8Yyr6vJLKvIpe7Tfe45JbyZlyGMlHZDZ4zbPF06dRvDlZ9gA%2BvcCVwribBOGW5JvCGIhUG9lt0XdX5oJnCxvh9nFFFaW19EoEUouzH4cd9YVbB2%2Bhi9jnbNjKg8r8H%2FSI%2FebDKW3iuXzfeUDL8hqsx%2BkqrNjUjM6%2BVrbUbjoOwLxSKYSMO7%2BlPZzw3jCzIZerh1nd%2BFEc4Z8LFvHcX9YsDGjzs%2BtieNswn4l2DSC9hObuttVi806GgDXKSf5Gl89nDIre80WB4%2FsCpnVqGoJ%2BcMpccfXytZ9nBKWidgKp6aL8lWFJewZWTeEL20zrtUEDU8833dJGAEGCSxKYboP6cbFyuJxCMzYyKyaNrAU4Qf7at8a6ZeadhkoO%2B%2FFfyJcLRBIiWKOP3KV9JYkM19ywQBK8ktqTiMZmA904Er4cF49lApePnVz74JgKa3zUbYvx2CAYmezDLN3PKBPuJh92Wmf8m7bkWk2DK8ZlAokq5DufW7shtIaonyJdD8SWpvTwoGX6ZUYl4GYlWCHhmA6RO0NKBWkjss%2BmAJZVHwnSe%2BCtQr00JuJlRAeFhaon439w3fD2%2BdfADySMnJC5MqzDFm5W9BjqkAZFpcx67IXxdVtNj%2F%2F2YWgMsdJ1pj5LR%2F61tDlyH5Jv3S3%2F1L%2BACteaP%2F27GgwhOfJN2rIYq8rDDFXXiqT4vwNQES683kuSXHoM%2BF%2FyaJMSzZjGt2ytmnxtVX3e6tGVW3OCA1JN9nNVhblnZSSA5%2FM%2B4KhFV1IHBQ9zdKcX594t5q71WCyKJfJR5azukB5uOQRlfteh9Tw1qNM0nI4j7gZERws%2BV&X-Amz-Signature=8006f295102815e5edf0a6d401e9ff56b7f856fdddcf594484463e03bbe8540d&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXZRNBC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDHxaVzYn4prn2CK2PK49MTxM5TasYvw32IuBiYxT28YQIhAKGvp29j7neLB2TPgSFVogT3NktNmMLrRvkgxS0ugqPKKv8DCGkQABoMNjM3NDIzMTgzODA1IgwwGDaR%2FIMZyaFEmE4q3APs6R%2Fa%2F23crKF7va48cjPHMwwcEUNseBJfvqLoJe8Yyr6vJLKvIpe7Tfe45JbyZlyGMlHZDZ4zbPF06dRvDlZ9gA%2BvcCVwribBOGW5JvCGIhUG9lt0XdX5oJnCxvh9nFFFaW19EoEUouzH4cd9YVbB2%2Bhi9jnbNjKg8r8H%2FSI%2FebDKW3iuXzfeUDL8hqsx%2BkqrNjUjM6%2BVrbUbjoOwLxSKYSMO7%2BlPZzw3jCzIZerh1nd%2BFEc4Z8LFvHcX9YsDGjzs%2BtieNswn4l2DSC9hObuttVi806GgDXKSf5Gl89nDIre80WB4%2FsCpnVqGoJ%2BcMpccfXytZ9nBKWidgKp6aL8lWFJewZWTeEL20zrtUEDU8833dJGAEGCSxKYboP6cbFyuJxCMzYyKyaNrAU4Qf7at8a6ZeadhkoO%2B%2FFfyJcLRBIiWKOP3KV9JYkM19ywQBK8ktqTiMZmA904Er4cF49lApePnVz74JgKa3zUbYvx2CAYmezDLN3PKBPuJh92Wmf8m7bkWk2DK8ZlAokq5DufW7shtIaonyJdD8SWpvTwoGX6ZUYl4GYlWCHhmA6RO0NKBWkjss%2BmAJZVHwnSe%2BCtQr00JuJlRAeFhaon439w3fD2%2BdfADySMnJC5MqzDFm5W9BjqkAZFpcx67IXxdVtNj%2F%2F2YWgMsdJ1pj5LR%2F61tDlyH5Jv3S3%2F1L%2BACteaP%2F27GgwhOfJN2rIYq8rDDFXXiqT4vwNQES683kuSXHoM%2BF%2FyaJMSzZjGt2ytmnxtVX3e6tGVW3OCA1JN9nNVhblnZSSA5%2FM%2B4KhFV1IHBQ9zdKcX594t5q71WCyKJfJR5azukB5uOQRlfteh9Tw1qNM0nI4j7gZERws%2BV&X-Amz-Signature=18b0d2d9522cdfe0afa2a828cd1ed64c2107548a3fbf3cae614dac9fd2f39dd1&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXZRNBC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDHxaVzYn4prn2CK2PK49MTxM5TasYvw32IuBiYxT28YQIhAKGvp29j7neLB2TPgSFVogT3NktNmMLrRvkgxS0ugqPKKv8DCGkQABoMNjM3NDIzMTgzODA1IgwwGDaR%2FIMZyaFEmE4q3APs6R%2Fa%2F23crKF7va48cjPHMwwcEUNseBJfvqLoJe8Yyr6vJLKvIpe7Tfe45JbyZlyGMlHZDZ4zbPF06dRvDlZ9gA%2BvcCVwribBOGW5JvCGIhUG9lt0XdX5oJnCxvh9nFFFaW19EoEUouzH4cd9YVbB2%2Bhi9jnbNjKg8r8H%2FSI%2FebDKW3iuXzfeUDL8hqsx%2BkqrNjUjM6%2BVrbUbjoOwLxSKYSMO7%2BlPZzw3jCzIZerh1nd%2BFEc4Z8LFvHcX9YsDGjzs%2BtieNswn4l2DSC9hObuttVi806GgDXKSf5Gl89nDIre80WB4%2FsCpnVqGoJ%2BcMpccfXytZ9nBKWidgKp6aL8lWFJewZWTeEL20zrtUEDU8833dJGAEGCSxKYboP6cbFyuJxCMzYyKyaNrAU4Qf7at8a6ZeadhkoO%2B%2FFfyJcLRBIiWKOP3KV9JYkM19ywQBK8ktqTiMZmA904Er4cF49lApePnVz74JgKa3zUbYvx2CAYmezDLN3PKBPuJh92Wmf8m7bkWk2DK8ZlAokq5DufW7shtIaonyJdD8SWpvTwoGX6ZUYl4GYlWCHhmA6RO0NKBWkjss%2BmAJZVHwnSe%2BCtQr00JuJlRAeFhaon439w3fD2%2BdfADySMnJC5MqzDFm5W9BjqkAZFpcx67IXxdVtNj%2F%2F2YWgMsdJ1pj5LR%2F61tDlyH5Jv3S3%2F1L%2BACteaP%2F27GgwhOfJN2rIYq8rDDFXXiqT4vwNQES683kuSXHoM%2BF%2FyaJMSzZjGt2ytmnxtVX3e6tGVW3OCA1JN9nNVhblnZSSA5%2FM%2B4KhFV1IHBQ9zdKcX594t5q71WCyKJfJR5azukB5uOQRlfteh9Tw1qNM0nI4j7gZERws%2BV&X-Amz-Signature=6448601e8c0b00882ce0afb913faf6b431c506dec8140b89337867f22fc4e149&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXZRNBC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDHxaVzYn4prn2CK2PK49MTxM5TasYvw32IuBiYxT28YQIhAKGvp29j7neLB2TPgSFVogT3NktNmMLrRvkgxS0ugqPKKv8DCGkQABoMNjM3NDIzMTgzODA1IgwwGDaR%2FIMZyaFEmE4q3APs6R%2Fa%2F23crKF7va48cjPHMwwcEUNseBJfvqLoJe8Yyr6vJLKvIpe7Tfe45JbyZlyGMlHZDZ4zbPF06dRvDlZ9gA%2BvcCVwribBOGW5JvCGIhUG9lt0XdX5oJnCxvh9nFFFaW19EoEUouzH4cd9YVbB2%2Bhi9jnbNjKg8r8H%2FSI%2FebDKW3iuXzfeUDL8hqsx%2BkqrNjUjM6%2BVrbUbjoOwLxSKYSMO7%2BlPZzw3jCzIZerh1nd%2BFEc4Z8LFvHcX9YsDGjzs%2BtieNswn4l2DSC9hObuttVi806GgDXKSf5Gl89nDIre80WB4%2FsCpnVqGoJ%2BcMpccfXytZ9nBKWidgKp6aL8lWFJewZWTeEL20zrtUEDU8833dJGAEGCSxKYboP6cbFyuJxCMzYyKyaNrAU4Qf7at8a6ZeadhkoO%2B%2FFfyJcLRBIiWKOP3KV9JYkM19ywQBK8ktqTiMZmA904Er4cF49lApePnVz74JgKa3zUbYvx2CAYmezDLN3PKBPuJh92Wmf8m7bkWk2DK8ZlAokq5DufW7shtIaonyJdD8SWpvTwoGX6ZUYl4GYlWCHhmA6RO0NKBWkjss%2BmAJZVHwnSe%2BCtQr00JuJlRAeFhaon439w3fD2%2BdfADySMnJC5MqzDFm5W9BjqkAZFpcx67IXxdVtNj%2F%2F2YWgMsdJ1pj5LR%2F61tDlyH5Jv3S3%2F1L%2BACteaP%2F27GgwhOfJN2rIYq8rDDFXXiqT4vwNQES683kuSXHoM%2BF%2FyaJMSzZjGt2ytmnxtVX3e6tGVW3OCA1JN9nNVhblnZSSA5%2FM%2B4KhFV1IHBQ9zdKcX594t5q71WCyKJfJR5azukB5uOQRlfteh9Tw1qNM0nI4j7gZERws%2BV&X-Amz-Signature=905caeda64c32964ebc4c2777a68516d243923f1d7296011923ab476a4d58328&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXZRNBC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDHxaVzYn4prn2CK2PK49MTxM5TasYvw32IuBiYxT28YQIhAKGvp29j7neLB2TPgSFVogT3NktNmMLrRvkgxS0ugqPKKv8DCGkQABoMNjM3NDIzMTgzODA1IgwwGDaR%2FIMZyaFEmE4q3APs6R%2Fa%2F23crKF7va48cjPHMwwcEUNseBJfvqLoJe8Yyr6vJLKvIpe7Tfe45JbyZlyGMlHZDZ4zbPF06dRvDlZ9gA%2BvcCVwribBOGW5JvCGIhUG9lt0XdX5oJnCxvh9nFFFaW19EoEUouzH4cd9YVbB2%2Bhi9jnbNjKg8r8H%2FSI%2FebDKW3iuXzfeUDL8hqsx%2BkqrNjUjM6%2BVrbUbjoOwLxSKYSMO7%2BlPZzw3jCzIZerh1nd%2BFEc4Z8LFvHcX9YsDGjzs%2BtieNswn4l2DSC9hObuttVi806GgDXKSf5Gl89nDIre80WB4%2FsCpnVqGoJ%2BcMpccfXytZ9nBKWidgKp6aL8lWFJewZWTeEL20zrtUEDU8833dJGAEGCSxKYboP6cbFyuJxCMzYyKyaNrAU4Qf7at8a6ZeadhkoO%2B%2FFfyJcLRBIiWKOP3KV9JYkM19ywQBK8ktqTiMZmA904Er4cF49lApePnVz74JgKa3zUbYvx2CAYmezDLN3PKBPuJh92Wmf8m7bkWk2DK8ZlAokq5DufW7shtIaonyJdD8SWpvTwoGX6ZUYl4GYlWCHhmA6RO0NKBWkjss%2BmAJZVHwnSe%2BCtQr00JuJlRAeFhaon439w3fD2%2BdfADySMnJC5MqzDFm5W9BjqkAZFpcx67IXxdVtNj%2F%2F2YWgMsdJ1pj5LR%2F61tDlyH5Jv3S3%2F1L%2BACteaP%2F27GgwhOfJN2rIYq8rDDFXXiqT4vwNQES683kuSXHoM%2BF%2FyaJMSzZjGt2ytmnxtVX3e6tGVW3OCA1JN9nNVhblnZSSA5%2FM%2B4KhFV1IHBQ9zdKcX594t5q71WCyKJfJR5azukB5uOQRlfteh9Tw1qNM0nI4j7gZERws%2BV&X-Amz-Signature=62fc173acba7919d2c9590ee7f45ede31d2795c1d34df99757823bb56655eaa9&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYXZRNBC%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQDHxaVzYn4prn2CK2PK49MTxM5TasYvw32IuBiYxT28YQIhAKGvp29j7neLB2TPgSFVogT3NktNmMLrRvkgxS0ugqPKKv8DCGkQABoMNjM3NDIzMTgzODA1IgwwGDaR%2FIMZyaFEmE4q3APs6R%2Fa%2F23crKF7va48cjPHMwwcEUNseBJfvqLoJe8Yyr6vJLKvIpe7Tfe45JbyZlyGMlHZDZ4zbPF06dRvDlZ9gA%2BvcCVwribBOGW5JvCGIhUG9lt0XdX5oJnCxvh9nFFFaW19EoEUouzH4cd9YVbB2%2Bhi9jnbNjKg8r8H%2FSI%2FebDKW3iuXzfeUDL8hqsx%2BkqrNjUjM6%2BVrbUbjoOwLxSKYSMO7%2BlPZzw3jCzIZerh1nd%2BFEc4Z8LFvHcX9YsDGjzs%2BtieNswn4l2DSC9hObuttVi806GgDXKSf5Gl89nDIre80WB4%2FsCpnVqGoJ%2BcMpccfXytZ9nBKWidgKp6aL8lWFJewZWTeEL20zrtUEDU8833dJGAEGCSxKYboP6cbFyuJxCMzYyKyaNrAU4Qf7at8a6ZeadhkoO%2B%2FFfyJcLRBIiWKOP3KV9JYkM19ywQBK8ktqTiMZmA904Er4cF49lApePnVz74JgKa3zUbYvx2CAYmezDLN3PKBPuJh92Wmf8m7bkWk2DK8ZlAokq5DufW7shtIaonyJdD8SWpvTwoGX6ZUYl4GYlWCHhmA6RO0NKBWkjss%2BmAJZVHwnSe%2BCtQr00JuJlRAeFhaon439w3fD2%2BdfADySMnJC5MqzDFm5W9BjqkAZFpcx67IXxdVtNj%2F%2F2YWgMsdJ1pj5LR%2F61tDlyH5Jv3S3%2F1L%2BACteaP%2F27GgwhOfJN2rIYq8rDDFXXiqT4vwNQES683kuSXHoM%2BF%2FyaJMSzZjGt2ytmnxtVX3e6tGVW3OCA1JN9nNVhblnZSSA5%2FM%2B4KhFV1IHBQ9zdKcX594t5q71WCyKJfJR5azukB5uOQRlfteh9Tw1qNM0nI4j7gZERws%2BV&X-Amz-Signature=41ad69936b0adc8c247afeec8d3c83d724b74ac073875bdc58f7b12e88bffb4c&X-Amz-SignedHeaders=host&x-id=GetObject)
