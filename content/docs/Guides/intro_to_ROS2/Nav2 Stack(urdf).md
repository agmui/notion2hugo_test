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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/60e8d4f3-bb68-4928-b682-3519bd67f0c9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCVRZE5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHbKQ8apY9U%2BK2ziU7YJNRymJS0cNvogGXvd92LHHTeVAiAwh39tIjZLD%2FJIsTX9sf1cCOZOuCkghu6PgNw3rfZTiSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVJ%2BcGmmIy292kWVKtwD1MVT9504Ayn8lzC2%2FAwfuid2NQS56%2BbbKYIzCSqstCpKD9gt5cqd6GQ7l2kjVfR2SqL16YMrxa5K6EdFAJ%2FhrtxxL5u%2BgyklHKWEQRGxXxbEhb36%2FiHcQlClXkE%2FXTmi3UDPCV8HQquzBLLjS8juptrM8LdkNQ9mdmFyuV2qGuiGWkAHZy%2BgywVDha7mw9uI7A%2FaT94vyx0hLxj8f3fgKSDJRXUflDgQQXx2Y%2BEYsyMckh2lkGw%2Fe%2F9XuccG5v8EmUYBOBOxrGdpsEXsihvh2TS0hupJZ0MQlXNaqH5Nj9u9aMfHHGEghY%2FveydCHAX6p58bJT9dQSOIb7v5aVYTbrFqVbGEWgE0KBC17FsUN5Uz1W%2Feqx5XeB%2B3UyunMqcfUeJ1rjv6p0BMB1kAoKluNuUpJoUCVuCCO5hLwHtWz8iHcK7v7%2BIFXDDYGbn8LzRST%2BK6myihf%2FmBcmPohDdVMscc8x%2FU5u77SM6btdK5IQzXdALZGxyr8CiNmRR2bTBzyHD3h%2BAn7jZ1DkTujT3ypkEMXQvAwQzAI0LhZEuPJOgJEawbdpyDoXXF3BzLrwDJDSqxIJeKNWJaEgNxAn2TxW9ApSIFzvVzyShHx6v%2FKDkX%2BW%2B1LkMN8rnmeHAw7takwAY6pgFJwpZQ313Q41UfKBBd09SKOFTjdnxZUHZcGdaChV9%2BLwmIytMYJIKkuO5hlavtHY0I0jnhzJH%2BV2PWx0xsC%2F1Hh5desl%2FZpI7x4Nu%2FmXYqEHdNuZEzrXfpc4okqByMT2Pae16NDA8DAaPX47q%2FB6GzCCy3L1jmPDrmLHD7lA7XurixNgvWsLsJ8cAbDGPDXCdhdvWaup4CQYUUuV5xVYnAv%2FpoY77a&X-Amz-Signature=145fa6a8d7be5bd5136fc196eb835a1c36fa63a0d13b5e1824d0847d6a762598&X-Amz-SignedHeaders=host&x-id=GetObject)

### urdf file:

[mbot_description.urdf](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/3b2e2a2a-0671-42c6-9a27-600d8e1f6385/mbot_description.urdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCVRZE5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHbKQ8apY9U%2BK2ziU7YJNRymJS0cNvogGXvd92LHHTeVAiAwh39tIjZLD%2FJIsTX9sf1cCOZOuCkghu6PgNw3rfZTiSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVJ%2BcGmmIy292kWVKtwD1MVT9504Ayn8lzC2%2FAwfuid2NQS56%2BbbKYIzCSqstCpKD9gt5cqd6GQ7l2kjVfR2SqL16YMrxa5K6EdFAJ%2FhrtxxL5u%2BgyklHKWEQRGxXxbEhb36%2FiHcQlClXkE%2FXTmi3UDPCV8HQquzBLLjS8juptrM8LdkNQ9mdmFyuV2qGuiGWkAHZy%2BgywVDha7mw9uI7A%2FaT94vyx0hLxj8f3fgKSDJRXUflDgQQXx2Y%2BEYsyMckh2lkGw%2Fe%2F9XuccG5v8EmUYBOBOxrGdpsEXsihvh2TS0hupJZ0MQlXNaqH5Nj9u9aMfHHGEghY%2FveydCHAX6p58bJT9dQSOIb7v5aVYTbrFqVbGEWgE0KBC17FsUN5Uz1W%2Feqx5XeB%2B3UyunMqcfUeJ1rjv6p0BMB1kAoKluNuUpJoUCVuCCO5hLwHtWz8iHcK7v7%2BIFXDDYGbn8LzRST%2BK6myihf%2FmBcmPohDdVMscc8x%2FU5u77SM6btdK5IQzXdALZGxyr8CiNmRR2bTBzyHD3h%2BAn7jZ1DkTujT3ypkEMXQvAwQzAI0LhZEuPJOgJEawbdpyDoXXF3BzLrwDJDSqxIJeKNWJaEgNxAn2TxW9ApSIFzvVzyShHx6v%2FKDkX%2BW%2B1LkMN8rnmeHAw7takwAY6pgFJwpZQ313Q41UfKBBd09SKOFTjdnxZUHZcGdaChV9%2BLwmIytMYJIKkuO5hlavtHY0I0jnhzJH%2BV2PWx0xsC%2F1Hh5desl%2FZpI7x4Nu%2FmXYqEHdNuZEzrXfpc4okqByMT2Pae16NDA8DAaPX47q%2FB6GzCCy3L1jmPDrmLHD7lA7XurixNgvWsLsJ8cAbDGPDXCdhdvWaup4CQYUUuV5xVYnAv%2FpoY77a&X-Amz-Signature=003e33233c60de065b58bd6dee5a59456a5dd2a348dada78cdef05d2893e6771&X-Amz-SignedHeaders=host&x-id=GetObject)

### rviz file:

[urdf_config.rviz](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/883b4535-a297-4d3c-87a4-6a90962c0695/urdf_config.rviz?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCVRZE5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHbKQ8apY9U%2BK2ziU7YJNRymJS0cNvogGXvd92LHHTeVAiAwh39tIjZLD%2FJIsTX9sf1cCOZOuCkghu6PgNw3rfZTiSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVJ%2BcGmmIy292kWVKtwD1MVT9504Ayn8lzC2%2FAwfuid2NQS56%2BbbKYIzCSqstCpKD9gt5cqd6GQ7l2kjVfR2SqL16YMrxa5K6EdFAJ%2FhrtxxL5u%2BgyklHKWEQRGxXxbEhb36%2FiHcQlClXkE%2FXTmi3UDPCV8HQquzBLLjS8juptrM8LdkNQ9mdmFyuV2qGuiGWkAHZy%2BgywVDha7mw9uI7A%2FaT94vyx0hLxj8f3fgKSDJRXUflDgQQXx2Y%2BEYsyMckh2lkGw%2Fe%2F9XuccG5v8EmUYBOBOxrGdpsEXsihvh2TS0hupJZ0MQlXNaqH5Nj9u9aMfHHGEghY%2FveydCHAX6p58bJT9dQSOIb7v5aVYTbrFqVbGEWgE0KBC17FsUN5Uz1W%2Feqx5XeB%2B3UyunMqcfUeJ1rjv6p0BMB1kAoKluNuUpJoUCVuCCO5hLwHtWz8iHcK7v7%2BIFXDDYGbn8LzRST%2BK6myihf%2FmBcmPohDdVMscc8x%2FU5u77SM6btdK5IQzXdALZGxyr8CiNmRR2bTBzyHD3h%2BAn7jZ1DkTujT3ypkEMXQvAwQzAI0LhZEuPJOgJEawbdpyDoXXF3BzLrwDJDSqxIJeKNWJaEgNxAn2TxW9ApSIFzvVzyShHx6v%2FKDkX%2BW%2B1LkMN8rnmeHAw7takwAY6pgFJwpZQ313Q41UfKBBd09SKOFTjdnxZUHZcGdaChV9%2BLwmIytMYJIKkuO5hlavtHY0I0jnhzJH%2BV2PWx0xsC%2F1Hh5desl%2FZpI7x4Nu%2FmXYqEHdNuZEzrXfpc4okqByMT2Pae16NDA8DAaPX47q%2FB6GzCCy3L1jmPDrmLHD7lA7XurixNgvWsLsJ8cAbDGPDXCdhdvWaup4CQYUUuV5xVYnAv%2FpoY77a&X-Amz-Signature=56d875f92a9a3c5e23c227bee73104334e04c284485a5330bd6c5f60ae277710&X-Amz-SignedHeaders=host&x-id=GetObject)

## Core design

TODO: explain map→odom→base_link→sensor…p

Just `robot_state_publisher` and `joint_state_publisher_gui` run the whole show

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/64f4a3b8-f3c0-4033-b559-14312f915650/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCVRZE5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHbKQ8apY9U%2BK2ziU7YJNRymJS0cNvogGXvd92LHHTeVAiAwh39tIjZLD%2FJIsTX9sf1cCOZOuCkghu6PgNw3rfZTiSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVJ%2BcGmmIy292kWVKtwD1MVT9504Ayn8lzC2%2FAwfuid2NQS56%2BbbKYIzCSqstCpKD9gt5cqd6GQ7l2kjVfR2SqL16YMrxa5K6EdFAJ%2FhrtxxL5u%2BgyklHKWEQRGxXxbEhb36%2FiHcQlClXkE%2FXTmi3UDPCV8HQquzBLLjS8juptrM8LdkNQ9mdmFyuV2qGuiGWkAHZy%2BgywVDha7mw9uI7A%2FaT94vyx0hLxj8f3fgKSDJRXUflDgQQXx2Y%2BEYsyMckh2lkGw%2Fe%2F9XuccG5v8EmUYBOBOxrGdpsEXsihvh2TS0hupJZ0MQlXNaqH5Nj9u9aMfHHGEghY%2FveydCHAX6p58bJT9dQSOIb7v5aVYTbrFqVbGEWgE0KBC17FsUN5Uz1W%2Feqx5XeB%2B3UyunMqcfUeJ1rjv6p0BMB1kAoKluNuUpJoUCVuCCO5hLwHtWz8iHcK7v7%2BIFXDDYGbn8LzRST%2BK6myihf%2FmBcmPohDdVMscc8x%2FU5u77SM6btdK5IQzXdALZGxyr8CiNmRR2bTBzyHD3h%2BAn7jZ1DkTujT3ypkEMXQvAwQzAI0LhZEuPJOgJEawbdpyDoXXF3BzLrwDJDSqxIJeKNWJaEgNxAn2TxW9ApSIFzvVzyShHx6v%2FKDkX%2BW%2B1LkMN8rnmeHAw7takwAY6pgFJwpZQ313Q41UfKBBd09SKOFTjdnxZUHZcGdaChV9%2BLwmIytMYJIKkuO5hlavtHY0I0jnhzJH%2BV2PWx0xsC%2F1Hh5desl%2FZpI7x4Nu%2FmXYqEHdNuZEzrXfpc4okqByMT2Pae16NDA8DAaPX47q%2FB6GzCCy3L1jmPDrmLHD7lA7XurixNgvWsLsJ8cAbDGPDXCdhdvWaup4CQYUUuV5xVYnAv%2FpoY77a&X-Amz-Signature=a0e7264c3658543a9f1fac78e5e322f02edc74ec2859c4ccd3c5ac6d73182e72&X-Amz-SignedHeaders=host&x-id=GetObject)

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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/98177d9e-161f-4928-ab62-342d42c35cff/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCVRZE5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHbKQ8apY9U%2BK2ziU7YJNRymJS0cNvogGXvd92LHHTeVAiAwh39tIjZLD%2FJIsTX9sf1cCOZOuCkghu6PgNw3rfZTiSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVJ%2BcGmmIy292kWVKtwD1MVT9504Ayn8lzC2%2FAwfuid2NQS56%2BbbKYIzCSqstCpKD9gt5cqd6GQ7l2kjVfR2SqL16YMrxa5K6EdFAJ%2FhrtxxL5u%2BgyklHKWEQRGxXxbEhb36%2FiHcQlClXkE%2FXTmi3UDPCV8HQquzBLLjS8juptrM8LdkNQ9mdmFyuV2qGuiGWkAHZy%2BgywVDha7mw9uI7A%2FaT94vyx0hLxj8f3fgKSDJRXUflDgQQXx2Y%2BEYsyMckh2lkGw%2Fe%2F9XuccG5v8EmUYBOBOxrGdpsEXsihvh2TS0hupJZ0MQlXNaqH5Nj9u9aMfHHGEghY%2FveydCHAX6p58bJT9dQSOIb7v5aVYTbrFqVbGEWgE0KBC17FsUN5Uz1W%2Feqx5XeB%2B3UyunMqcfUeJ1rjv6p0BMB1kAoKluNuUpJoUCVuCCO5hLwHtWz8iHcK7v7%2BIFXDDYGbn8LzRST%2BK6myihf%2FmBcmPohDdVMscc8x%2FU5u77SM6btdK5IQzXdALZGxyr8CiNmRR2bTBzyHD3h%2BAn7jZ1DkTujT3ypkEMXQvAwQzAI0LhZEuPJOgJEawbdpyDoXXF3BzLrwDJDSqxIJeKNWJaEgNxAn2TxW9ApSIFzvVzyShHx6v%2FKDkX%2BW%2B1LkMN8rnmeHAw7takwAY6pgFJwpZQ313Q41UfKBBd09SKOFTjdnxZUHZcGdaChV9%2BLwmIytMYJIKkuO5hlavtHY0I0jnhzJH%2BV2PWx0xsC%2F1Hh5desl%2FZpI7x4Nu%2FmXYqEHdNuZEzrXfpc4okqByMT2Pae16NDA8DAaPX47q%2FB6GzCCy3L1jmPDrmLHD7lA7XurixNgvWsLsJ8cAbDGPDXCdhdvWaup4CQYUUuV5xVYnAv%2FpoY77a&X-Amz-Signature=b4ece87821bca7ec67e0e19dbea6b16d136238a071dded87acbb029c71653575&X-Amz-SignedHeaders=host&x-id=GetObject)

# Adding collision

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/6c70e3ae-bba2-425a-8727-0c3370140bcf/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMCVRZE5%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T181203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCIHbKQ8apY9U%2BK2ziU7YJNRymJS0cNvogGXvd92LHHTeVAiAwh39tIjZLD%2FJIsTX9sf1cCOZOuCkghu6PgNw3rfZTiSqIBAjz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMiVJ%2BcGmmIy292kWVKtwD1MVT9504Ayn8lzC2%2FAwfuid2NQS56%2BbbKYIzCSqstCpKD9gt5cqd6GQ7l2kjVfR2SqL16YMrxa5K6EdFAJ%2FhrtxxL5u%2BgyklHKWEQRGxXxbEhb36%2FiHcQlClXkE%2FXTmi3UDPCV8HQquzBLLjS8juptrM8LdkNQ9mdmFyuV2qGuiGWkAHZy%2BgywVDha7mw9uI7A%2FaT94vyx0hLxj8f3fgKSDJRXUflDgQQXx2Y%2BEYsyMckh2lkGw%2Fe%2F9XuccG5v8EmUYBOBOxrGdpsEXsihvh2TS0hupJZ0MQlXNaqH5Nj9u9aMfHHGEghY%2FveydCHAX6p58bJT9dQSOIb7v5aVYTbrFqVbGEWgE0KBC17FsUN5Uz1W%2Feqx5XeB%2B3UyunMqcfUeJ1rjv6p0BMB1kAoKluNuUpJoUCVuCCO5hLwHtWz8iHcK7v7%2BIFXDDYGbn8LzRST%2BK6myihf%2FmBcmPohDdVMscc8x%2FU5u77SM6btdK5IQzXdALZGxyr8CiNmRR2bTBzyHD3h%2BAn7jZ1DkTujT3ypkEMXQvAwQzAI0LhZEuPJOgJEawbdpyDoXXF3BzLrwDJDSqxIJeKNWJaEgNxAn2TxW9ApSIFzvVzyShHx6v%2FKDkX%2BW%2B1LkMN8rnmeHAw7takwAY6pgFJwpZQ313Q41UfKBBd09SKOFTjdnxZUHZcGdaChV9%2BLwmIytMYJIKkuO5hlavtHY0I0jnhzJH%2BV2PWx0xsC%2F1Hh5desl%2FZpI7x4Nu%2FmXYqEHdNuZEzrXfpc4okqByMT2Pae16NDA8DAaPX47q%2FB6GzCCy3L1jmPDrmLHD7lA7XurixNgvWsLsJ8cAbDGPDXCdhdvWaup4CQYUUuV5xVYnAv%2FpoY77a&X-Amz-Signature=44744458dcf7e53aa7fbfa86e0f42b882de38ca1849cb2b7b441817afcedb87a&X-Amz-SignedHeaders=host&x-id=GetObject)
